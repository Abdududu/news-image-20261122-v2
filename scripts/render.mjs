// Dev-time renderer: loads page.html in headless Chromium and screenshots it
// at exactly 1024x1024 into assets/news.png. Not used by the graded program.
import { chromium } from 'playwright-core';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdirSync } from 'node:fs';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const outDir = join(root, 'assets');
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1024, height: 1024 }, deviceScaleFactor: 1 });
await page.goto('file://' + join(root, 'page.html'));
await page.waitForTimeout(400);
await page.screenshot({ path: join(outDir, 'news.png') });
await browser.close();
console.log('wrote assets/news.png');
