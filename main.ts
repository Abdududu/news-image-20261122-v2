// Graded entry point: copy the pre-built image into the output directory.
// Pure Node — only node builtins. Never removes the output directory.
import { copyFileSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(fileURLToPath(import.meta.url));
const SRC = join(ROOT, 'assets', 'news.png');
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || join(ROOT, 'out');
const DEST = join(OUT_DIR, 'entry.png');

const PNG_SIG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const buf = readFileSync(SRC);
if (buf.length === 0) throw new Error('assets/news.png is empty');
if (!buf.subarray(0, 8).equals(PNG_SIG)) throw new Error('assets/news.png is not a PNG');
if (buf.length > 1024 * 1024) throw new Error('assets/news.png exceeds the 1 MiB limit');
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);
if (width > 1024 || height > 1024) throw new Error('assets/news.png exceeds 1024x1024');

mkdirSync(OUT_DIR, { recursive: true });
copyFileSync(SRC, DEST);

const manifest = {
  title: 'The World in One Day — Sunday 22 November 2026',
  stories: 35,
  regions: 7,
  image: 'entry.png',
  width,
  height,
  bytes: buf.length,
};
writeFileSync(join(OUT_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');

const written = statSync(DEST);
console.log(`wrote ${DEST} (${written.size} bytes)`);
console.log(`wrote ${join(OUT_DIR, 'manifest.json')}`);
