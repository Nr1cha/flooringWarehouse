const fs = require('fs');
let customer = 'customer';


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