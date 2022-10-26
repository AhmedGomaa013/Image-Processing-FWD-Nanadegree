import fs from 'node:fs/promises';

const createDirectory = async (directoryPath: string): Promise<void> => {
  // check on directory if false create directory
  try {
    await fs.stat(directoryPath);
  } catch (e) {
    await fs.mkdir(directoryPath);
  }
};

const fileExists = async (filePath: string): Promise<boolean> => {
  try {
    await fs.stat(filePath);
    return true;
  } catch (e) {
    return false;
  }
};

export { createDirectory, fileExists };
