import app from '../app';
import request from 'supertest';
import { resizeImageFile } from '../utils/image-reading';

describe('Image Processing API Testing', () => {
  it('Wrong Parameters', async () => {
    const res = await request(app).get(
      '/api?filename=santamonica.jpg&width=1000&height='
    );
    expect(res.status).toBe(400);
  });

  it('Wrong File Name', async () => {
    const res = await request(app).get(
      '/api?filename=santamonicajpg&width=1000&height=1000'
    );
    expect(res.status).toBe(400);
  });

  it('File not found', async () => {
    const res = await request(app).get(
      '/api?filename=santamoni.jpg&width=1000&height=1000'
    );
    expect(res.status).toBe(404);
  });

  it('It should return 200', async () => {
    const res = await request(app).get(
      '/api?filename=santamonica.jpg&width=1000&height=1000'
    );
    expect(res.status).toBe(200);
  });
});

describe('Image Processing Testing', () => {
  it("It shouldn't throw exception", async () => {
    expect(async () => {
      await resizeImageFile('santamonica.jpg', 100, 100);
    }).not.toThrow();
  });

  it('to throw error', async () => {
    let errorMessage = '';
    try {
        await resizeImageFile('santamonica.jpg', -100, 100);
    } catch (error: any) {
        errorMessage = error.message;
    }
    expect(errorMessage).toBe('Expected positive integer for width but received -100 of type number');
});
});
