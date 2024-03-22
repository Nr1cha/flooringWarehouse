const request = require('supertest');
const express = require('express');
const customer = require('./customer');


const app = express();
app.use(express.json());
app.use('/', customer);

describe('Verify the functionality of the /customers path', () => {
    test('The GET method should return a successful response', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});