/**
 * Resizes every JPG/PNG in /public/images to AVIF + WebP at multiple widths
 * and writes a blur-data.json with low-resolution base64 placeholders.
 *
 * Run: pnpm optimize:images
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(process.cwd());
const SRC = path.join(ROOT, "public/images");
const OUT = path.join(ROOT, "public/images-optimized");
const WIDTHS = [640, 1024, 1920, 2560];

async function main() {
  await fs.mkdir(OUT, { recursive: true });
  const files = (await fs.readdir(SRC)).filter((f) =>
    /\.(jpe?g|png)$/i.test(f),
  );

  const blurMap: Record<string, string> = {};

  for (const file of files) {
    const inputPath = path.join(SRC, file);
    const stem = path.parse(file).name;
    const input = sharp(inputPath, { failOnError: false });
    const meta = await input.metadata();
    const srcWidth = meta.width ?? 2560;

    for (const w of WIDTHS) {
      if (w > srcWidth * 1.05) continue;
      const buffer = await sharp(inputPath, { failOnError: false })
        .resize({ width: w, withoutEnlargement: true })
        .toBuffer();

      await sharp(buffer)
        .avif({ quality: 55 })
        .toFile(path.join(OUT, `${stem}-${w}.avif`));
      await sharp(buffer)
        .webp({ quality: 78 })
        .toFile(path.join(OUT, `${stem}-${w}.webp`));
    }

    const blur = await sharp(inputPath, { failOnError: false })
      .resize({ width: 16 })
      .webp({ quality: 35 })
      .toBuffer();
    blurMap[file] = `data:image/webp;base64,${blur.toString("base64")}`;

    process.stdout.write(`✓ ${file}\n`);
  }

  await fs.writeFile(
    path.join(OUT, "blur-data.json"),
    JSON.stringify(blurMap, null, 2) + "\n",
  );
  process.stdout.write(
    `\nDone — ${files.length} images, ${WIDTHS.length}× variants each.\n`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
