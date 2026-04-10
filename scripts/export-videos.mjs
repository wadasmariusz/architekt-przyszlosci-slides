import { chromium } from '@playwright/test';
import select from '@inquirer/select';
import { readdirSync, mkdirSync, existsSync, renameSync } from 'fs';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, '..');
const SLIDES_DIR = join(ROOT, 'slides');

const VIEWPORT = { width: 1920, height: 1080 };
const DEFAULT_DURATION_MS = 5000;

function findSlideFolders(dir, base = '') {
  const folders = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const fullPath = join(dir, entry.name);
    const relPath = base ? `${base}/${entry.name}` : entry.name;
    const files = readdirSync(fullPath).filter(f => /^slides-\d+\.html$/.test(f));
    if (files.length > 0) {
      folders.push({ path: fullPath, rel: relPath, files: files.sort() });
    }
    folders.push(...findSlideFolders(fullPath, relPath));
  }
  return folders;
}

function parseArgs() {
  const args = process.argv.slice(2);
  let duration = DEFAULT_DURATION_MS;
  let allFlag = false;
  let slideFilter = null;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--all') allFlag = true;
    if (args[i] === '--duration' && args[i + 1]) {
      duration = parseInt(args[i + 1], 10);
      i++;
    }
    if (args[i] === '--slide' && args[i + 1]) {
      slideFilter = args[i + 1];
      i++;
    }
  }
  return { duration, allFlag, slideFilter };
}

async function run() {
  const { duration, allFlag, slideFilter } = parseArgs();

  const folders = findSlideFolders(SLIDES_DIR);
  if (folders.length === 0) {
    console.error('Nie znaleziono folderów ze slajdami.');
    process.exit(1);
  }

  let selectedFolders;

  if (allFlag) {
    selectedFolders = folders;
    console.log(`Tryb --all: przetwarzam ${folders.length} folderów.\n`);
  } else {
    const chosen = await select({
      message: 'Wybierz folder ze slajdami:',
      choices: folders.map(f => ({
        name: `${f.rel} (${f.files.length} slajdów)`,
        value: f,
      })),
    });
    selectedFolders = [chosen];
  }

  console.log(`Czas nagrania per slajd: ${duration}ms`);

  const browser = await chromium.launch();
  let totalVideos = 0;

  for (const folder of selectedFolders) {
    const videosDir = join(folder.path, 'videos');
    if (!existsSync(videosDir)) {
      mkdirSync(videosDir, { recursive: true });
    }

    let files = folder.files;
    if (slideFilter) {
      files = files.filter(f => f.includes(slideFilter));
      if (files.length === 0) {
        console.log(`\n⚠️  ${folder.rel} — brak slajdów pasujących do "${slideFilter}"`);
        continue;
      }
    }

    console.log(`\n📂 ${folder.rel} (${files.length} slajdów do nagrania)`);

    for (const file of files) {
      const filePath = join(folder.path, file);
      const fileUrl = `file://${filePath}`;
      const videoName = file.replace('.html', '.webm');
      const outputPath = join(videosDir, videoName);

      // Each slide gets its own context with video recording
      const context = await browser.newContext({
        viewport: VIEWPORT,
        deviceScaleFactor: 1,
        recordVideo: {
          dir: videosDir,
          size: VIEWPORT,
        },
      });

      const page = await context.newPage();

      try {
        await page.goto(fileUrl, { waitUntil: 'networkidle', timeout: 30000 });

        // Wait for fonts
        await page.evaluate(() => document.fonts.ready);

        // Record for the specified duration (animations play from page load)
        await page.waitForTimeout(duration);

        // Close page to finalize video
        await page.close();

        // Get the video path and rename to our naming convention
        const video = page.video();
        if (video) {
          const tempPath = await video.path();
          renameSync(tempPath, outputPath);
          console.log(`  ✅ ${file} → videos/${videoName} (${duration}ms)`);
          totalVideos++;
        }
      } catch (err) {
        console.error(`  ❌ ${file} — błąd: ${err.message}`);
        await page.close().catch(() => {});
      } finally {
        await context.close();
      }
    }
  }

  await browser.close();

  console.log(`\n🏁 Gotowe! Zapisano ${totalVideos} nagrań video.`);
}

run().catch(err => {
  console.error('Błąd:', err);
  process.exit(1);
});
