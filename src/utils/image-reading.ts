import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { basePath, createDirectory, fileExists } from './directory-helper';

const resizeImageFile = async (
  filename: string,
  width: number,
  height: number
): Promise<string> => {
  const filePath = path.join(basePath, 'full', `${filename}`);
  const imageBuffer = await fs.readFile(filePath);

  let destPath = path.join(basePath, 'thumb');
  await createDirectory(destPath);

  destPath = path.join(basePath, 'thumb', `${width}${height}${filename}`);
  const isFileExist = await fileExists(destPath);

  if (isFileExist) {
    return destPath;
  }
  await sharp(imageBuffer)
    .resize(Number(width), Number(height))
    .toFile(destPath);

  return destPath;
};

export { resizeImageFile };
