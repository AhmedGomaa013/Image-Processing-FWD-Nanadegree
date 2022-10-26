import app from '../app';
import request from 'supertest';

describe('Image Processing API Testing', () => {
    it('Wrong Parameters', async () => {
        const res = await request(app).get('/api?filename=santamonica.jpg&width=1000&height=');
        expect(res.status).toBe(400);
    });

    it('Wrong File Name', async () => {
        const res = await request(app).get('/api?filename=santamonicajpg&width=1000&height=1000');
        expect(res.status).toBe(400);
    })

    it('File not found', async () => {
        const res = await request(app).get('/api?filename=santamoni.jpg&width=1000&height=1000');
        expect(res.status).toBe(404);
    })

    it('It should return 200', async () => {
        const res = await request(app).get('/api?filename=santamonica.jpg&width=1000&height=1000');
        expect(res.status).toBe(200);
    })
})