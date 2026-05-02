import sharp from "sharp";
import { readdir, stat, rename, unlink } from "node:fs/promises";
import { join, extname, basename } from "node:path";

const SRC = "public/img";
const MAX_W = 2400;
const QUALITY = 82;

const files = await readdir(SRC);
let totalBefore = 0, totalAfter = 0;

for (const f of files) {
  const p = join(SRC, f);
  const ext = extname(f).toLowerCase();
  const name = basename(f, ext);
  if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

  const before = (await stat(p)).size;
  totalBefore += before;

  const img = sharp(p, { limitInputPixels: false }).rotate();
  const meta = await img.metadata();
  const w = meta.width ?? MAX_W;
  const targetW = Math.min(w, MAX_W);

  const isLogo = name.includes("logo") || name.includes("herbstregatta");
  const outExt = isLogo && ext === ".png" ? ".png" : ".jpg";
  const tmp = join(SRC, `__tmp__${name}${outExt}`);

  let pipeline = sharp(p, { limitInputPixels: false }).rotate();
  if (w > MAX_W) pipeline = pipeline.resize({ width: MAX_W });

  if (outExt === ".png") {
    await pipeline.png({ compressionLevel: 9, palette: true }).toFile(tmp);
  } else {
    await pipeline.jpeg({ quality: QUALITY, mozjpeg: true }).toFile(tmp);
  }

  await unlink(p);
  await rename(tmp, join(SRC, `${name}${outExt}`));

  const after = (await stat(join(SRC, `${name}${outExt}`))).size;
  totalAfter += after;
  console.log(`${f}  ${(before/1024/1024).toFixed(1)}M → ${(after/1024/1024).toFixed(2)}M  (-${(100*(1-after/before)).toFixed(0)}%)`);
}

console.log(`\nTotal: ${(totalBefore/1024/1024).toFixed(0)}M → ${(totalAfter/1024/1024).toFixed(0)}M  (-${(100*(1-totalAfter/totalBefore)).toFixed(0)}%)`);
