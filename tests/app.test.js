const request = require('supertest');
const app = require('../app'); // Adjust the path as needed

describe('GET /', () => {
  it('should respond with a welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Welcome to the world of potential octo-tribbles!');
  });
});
