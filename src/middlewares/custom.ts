import { Request, Response, NextFunction } from 'express';

const checkQuery = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  let { filename, width, height } = req.query;
  if (width === '' || isNaN(Number(width))) {
    return res.status(400).send('Wrong Parameters');
  } else if (height === '' || isNaN(Number(height))) {
    return res.status(400).send('Wrong Parameters');
  } else if (filename == null || filename === '') {
    return res.status(400).send('Wrong Parameters');
  }
  filename = filename as unknown as string;
  if (!filename.includes('.')) {
    return res.status(400).send('Wrong File Name');
  }
  next();
};

export default checkQuery;
