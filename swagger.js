require('dotenv').config(); //load envVar from my .env file
const swaggerAutoGen = require('swagger-autogen')();

const swaggerDefinition = (host, lane) => ({
    info: {
        title: 'Flooring Warehouse API',
        version: '1.0.0',
        description: 'Manage products',
    },
    host: host, // Change this to your actual host
    schemes: lane === 'local' ? ['http'] : ['https'], // Use 'https' if applicable
    tags: [
        { name: 'Floorings', description: 'floorings API' },
        { name: 'Customer', description: 'customers API' },
        { name: 'Employee', description: 'employees API' },
        { name: 'Order', description: 'orders API' }
    ]
    // // adding the member API definition
    // CustomElementRegistryAPI: {
    //     title: 'Customer API',
    //     version: '1.0.0',
    //     description: 'Manage customers',
    // },
    // host: host, // Change this to your actual host
    // schemes: lane === 'local' ? ['http'] : ['https'], // Use 'https' if applicable

    // // adding the member API definition
    // employeeAPI: {
    //     title: 'Employee API',
    //     version: '1.0.0',
    //     description: 'Manage employees',
    // },
    // host: host, // Change this to your actual host
    // schemes: lane === 'local' ? ['http'] : ['https'], // Use 'https' if applicable


    // // adding the member API definition
    // ordersAPI: {
    //     title: 'Orders API',
    //     version: '1.0.0',
    //     description: 'Manage orders',
    // },
    // host: host, // Change this to your actual host
    // schemes: lane === 'local' ? ['http'] : ['https'], // Use 'https' if applicable
});
const routes = ['./routes/index.js'];
// // Define your tags (replace with relevant tag names)
// const tags = [
//     { name: 'Floorings', description: 'Operations related to floorings' },
//     { name: 'Customer', description: 'Operations related to customers' },
//     { name: 'Employee', description: 'Operations related to employees' },
//     { name: 'Order', description: 'Operations related to orders' },
//     // Add more tags as needed
// ];

swaggerAutoGen(
    `./swagger-output-${process.env.CURRENT_LANE}.json`,
    routes,
    swaggerDefinition(process.env.HOST, process.env.CURRENT_LANE)
).then(() => {
    require('./server.js'); // project root file
});