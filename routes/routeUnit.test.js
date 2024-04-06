const fs = require('fs');
let customer = 'customer';

const request = require('supertest');
const express = require('express');
const customerRoute = require('./customer');


test(`file "${customer}.js" exists`, () => {
    expect(fs.existsSync('./routes/customer.js')).toBe(true);
});

test('file "employee.js" exists', () => {
    expect(fs.existsSync('./routes/employee.js')).toBe(true);
});

test('file "index.js" exists', () => {
    expect(fs.existsSync('./routes/index.js')).toBe(true);
});

test('file "orders.js" exists', () => {
    expect(fs.existsSync('./routes/orders.js')).toBe(true);
});

test('file "products.js" exists', () => {
    expect(fs.existsSync('./routes/products.js')).toBe(true);
});

test('file "server.js" exists', () => {
    expect(fs.existsSync('./server.js')).toBe(true);
});

// test('file "server.js" exists', () => {
//     if(!fs.existsSync('../server.js')){
//         throw new Error('File "server.js" does not exist')
//     }
// });


const app = express();
app.use('/', customerRoute);


describe('GET /', () => {
  it('should return a 500 status code because it is not expected to work in this case', async () => { //message
    const response = await request(app).get('/');
    expect(response.status).toBe(500); //expecting a 500 error 
  });
});