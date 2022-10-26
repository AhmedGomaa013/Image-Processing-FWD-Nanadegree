import express from 'express';
import path from 'node:path';
import checkQuery from '../middlewares/custom';
import { fileExists } from '../utils/directory-helper';
import { resizeImageFile } from '../utils/image-reading';

const routes = express.Router();

const basePath = path.join(__dirname, '..', '..', 'assets');

routes.get(
  '/api',
  checkQuery,
  async (req: express.Request, res: express.Response): Promise<any> => {
    let { filename, width, height } = req.query;

    filename = filename as unknown as string;
    width = width as unknown as string;
    height = height as unknown as string;

    const filePath = path.join(basePath, 'full', `${filename}`);
    const isFileExist = await fileExists(filePath);
    if (!isFileExist) {
      return res.status(404).send('File not found');
    }

    const newImagePath = await resizeImageFile(
      filename,
      Number(width),
      Number(height)
    );

    return res.sendFile(newImagePath);
  }
);

export default routes;
