import { chromium } from '@playwright/test';
import select from '@inquirer/select';
import { readdirSync, mkdirSync, existsSync } from 'fs';
import { join, resolve, relative } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, '..');
const SLIDES_DIR = join(ROOT, 'slides');

const VIEWPORT = { width: 1920, height: 1080 };
const ANIMATION_WAIT_MS = 3500;

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
    // recurse
    folders.push(...findSlideFolders(fullPath, relPath));
  }
  return folders;
}

function getSlideFiles(dirPath) {
  return readdirSync(dirPath)
    .filter(f => /^slides-\d+\.html$/.test(f))
    .sort();
}

async function run() {
  const allFlag = process.argv.includes('--all');

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

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 1,
  });

  let totalScreenshots = 0;

  for (const folder of selectedFolders) {
    const screenshotsDir = join(folder.path, 'screenshots');
    if (!existsSync(screenshotsDir)) {
      mkdirSync(screenshotsDir, { recursive: true });
    }

    console.log(`\n📂 ${folder.rel} (${folder.files.length} slajdów)`);

    for (const file of folder.files) {
      const filePath = join(folder.path, file);
      const fileUrl = `file://${filePath}`;
      const pngName = file.replace('.html', '.png');
      const outputPath = join(screenshotsDir, pngName);

      const page = await context.newPage();

      try {
        await page.goto(fileUrl, { waitUntil: 'networkidle', timeout: 30000 });

        // Wait for fonts
        await page.evaluate(() => document.fonts.ready);

        // Wait for CSS animations to complete
        await page.waitForTimeout(ANIMATION_WAIT_MS);

        // Screenshot the .stage element
        const stage = await page.$('.stage');
        if (stage) {
          await stage.screenshot({ path: outputPath, type: 'png' });
        } else {
          // Fallback: full page screenshot
          await page.screenshot({ path: outputPath, type: 'png' });
          console.log(`  ⚠️  ${file} — brak elementu .stage, zrobiono full screenshot`);
        }

        console.log(`  ✅ ${file} → screenshots/${pngName}`);
        totalScreenshots++;
      } catch (err) {
        console.error(`  ❌ ${file} — błąd: ${err.message}`);
      } finally {
        await page.close();
      }
    }
  }

  await browser.close();

  console.log(`\n🏁 Gotowe! Zapisano ${totalScreenshots} screenshotów.`);
}

run().catch(err => {
  console.error('Błąd:', err);
  process.exit(1);
});
