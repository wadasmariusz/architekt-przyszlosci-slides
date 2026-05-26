import { chromium } from '@playwright/test';
import select from '@inquirer/select';
import { readdirSync, mkdirSync, existsSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, '..');
const ASTRO_DIR = join(ROOT, 'astro');
const PAGES_DIR = join(ASTRO_DIR, 'src', 'pages');

const VIEWPORT = { width: 1920, height: 1080 };
const ANIMATION_WAIT_MS = 3500;
const SERVER_HOST = '127.0.0.1';
const SERVER_PORT = 4321;
const SERVER_BASE = `http://${SERVER_HOST}:${SERVER_PORT}`;

const SLIDE_PATTERN = /^slajd-(\d+)([a-z]?)\.astro$/;

function findSlideFolders(dir, base = '') {
  const folders = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const fullPath = join(dir, entry.name);
    const relPath = base ? `${base}/${entry.name}` : entry.name;
    const files = readdirSync(fullPath).filter(f => SLIDE_PATTERN.test(f));
    if (files.length > 0) {
      folders.push({ path: fullPath, rel: relPath, files: files.sort() });
    }
    folders.push(...findSlideFolders(fullPath, relPath));
  }
  return folders;
}

function waitForServer(timeoutMs = 60000) {
  const start = Date.now();
  return new Promise((resolveReady, reject) => {
    const tryOnce = () => {
      const req = http.get(SERVER_BASE, res => {
        res.resume();
        resolveReady();
      });
      req.on('error', () => {
        if (Date.now() - start > timeoutMs) {
          reject(new Error('Serwer Astro nie wstał w czasie'));
        } else {
          setTimeout(tryOnce, 250);
        }
      });
    };
    tryOnce();
  });
}

function runProcess(cmd, args, cwd) {
  return new Promise((resolveProc, reject) => {
    const proc = spawn(cmd, args, { cwd, stdio: 'inherit' });
    proc.on('exit', code => {
      if (code === 0) resolveProc();
      else reject(new Error(`${cmd} ${args.join(' ')} → exit ${code}`));
    });
    proc.on('error', reject);
  });
}

async function run() {
  const allFlag = process.argv.includes('--all');
  const skipBuild = process.argv.includes('--skip-build');
  const slideArgIndex = process.argv.indexOf('--slide');
  const slideFilter = slideArgIndex !== -1 ? process.argv[slideArgIndex + 1] : null;

  if (slideFilter && !/^\d+[a-z]?$/.test(slideFilter)) {
    console.error('Flaga --slide wymaga numeru slajdu (opcjonalnie z literą), np. --slide 5 lub --slide 7a');
    process.exit(1);
  }

  const folders = findSlideFolders(PAGES_DIR);
  if (folders.length === 0) {
    console.error('Nie znaleziono folderów ze slajdami (.astro) w astro/src/pages.');
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

  if (slideFilter) {
    const [, slideDigits, slideSuffix] = slideFilter.match(/^(\d+)([a-z]?)$/);
    const slideFile = `slajd-${slideDigits.padStart(2, '0')}${slideSuffix}.astro`;
    selectedFolders = selectedFolders.map(f => ({
      ...f,
      files: f.files.filter(file => file === slideFile),
    })).filter(f => f.files.length > 0);

    if (selectedFolders.length === 0) {
      console.error(`Nie znaleziono slajdu ${slideFile}.`);
      process.exit(1);
    }
    console.log(`Tryb --slide: eksportuję tylko ${slideFile}\n`);
  }

  if (!skipBuild) {
    console.log('🛠  astro build...');
    await runProcess('npx', ['astro', 'build'], ASTRO_DIR);
  } else {
    console.log('⏭  Pomijam build (--skip-build).');
  }

  console.log('🚀 astro preview...');
  const server = spawn(
    'npx',
    ['astro', 'preview', '--host', SERVER_HOST, '--port', String(SERVER_PORT)],
    { cwd: ASTRO_DIR, stdio: ['ignore', 'pipe', 'pipe'] }
  );
  server.stdout.on('data', d => process.stdout.write(`[astro] ${d}`));
  server.stderr.on('data', d => process.stderr.write(`[astro] ${d}`));

  let stopped = false;
  const cleanup = () => {
    if (stopped) return;
    stopped = true;
    if (!server.killed) server.kill('SIGTERM');
  };
  process.on('SIGINT', () => { cleanup(); process.exit(130); });
  process.on('SIGTERM', () => { cleanup(); process.exit(143); });

  try {
    await waitForServer();
    console.log(`✅ Serwer gotowy: ${SERVER_BASE}\n`);

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
        const routeName = file.replace(/\.astro$/, '.html');
        const url = `${SERVER_BASE}/${folder.rel}/${routeName}`;
        const pngName = file.replace(/\.astro$/, '.png');
        const outputPath = join(screenshotsDir, pngName);

        const page = await context.newPage();
        try {
          await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
          await page.evaluate(() => document.fonts.ready);
          await page.waitForTimeout(ANIMATION_WAIT_MS);

          const stage = await page.$('.stage');
          if (stage) {
            await stage.screenshot({ path: outputPath, type: 'png' });
          } else {
            await page.screenshot({ path: outputPath, type: 'png' });
            console.log(`  ⚠️  ${file} - brak elementu .stage, zrobiono full screenshot`);
          }

          console.log(`  ✅ ${file} → screenshots/${pngName}`);
          totalScreenshots++;
        } catch (err) {
          console.error(`  ❌ ${file} - błąd: ${err.message}`);
        } finally {
          await page.close();
        }
      }
    }

    await browser.close();
    console.log(`\n🏁 Gotowe! Zapisano ${totalScreenshots} screenshotów.`);
  } finally {
    cleanup();
  }
}

run().catch(err => {
  console.error('Błąd:', err);
  process.exit(1);
});
