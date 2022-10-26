import express from 'express';
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import checkQuery from '../middlewares/custom';
import {createDirectory, fileExists} from '../utils/directory-helper';

const routes = express.Router();

const basePath = path.join(__dirname, '..', '..', 'assets');

routes.get('/api', checkQuery, async (req: express.Request, res: express.Response): Promise<void>  => {
    let {filename, width, height} = req.query;

    filename = (filename as unknown) as string;
    width = (width as unknown) as string;
    height = (height as unknown) as string;

    const filePath = path.join(basePath, 'full', `${filename}`);
    let isFileExist = await fileExists(filePath);
    if(!isFileExist){
      res.status(404).send("File not found");
      
    }
    else{
    const imageBuffer = await fs.readFile(filePath);

    let destPath = path.join(basePath, 'thumb');
    await createDirectory(destPath);
    
    destPath = path.join(basePath, 'thumb', `${width}${height}${filename}`);
    isFileExist = await fileExists(destPath);
    if(isFileExist){
      res.sendFile(destPath);
    }
    else{
    await sharp(imageBuffer).resize(Number(width), Number(height)).toFile(destPath);
    res.sendFile(destPath);
    }
  }
})

export default routes;