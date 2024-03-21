require('dotenv').config(); //load envVar from my .env file
const swaggerAutoGen = require('swagger-autogen')();

const swaggerDefinition = (host, lane) => ({
    info: {
        title: 'Flooring API',
        version: '1.0.0',
        description: 'Manage products',
    },
    host: host, // Change this to your actual host
    schemes: lane === 'local' ? ['http'] : ['https'], // Use 'https' if applicable
    // adding the member API definition
    CustomElementRegistryAPI: {
        title: 'Customer API',
        version: '1.0.0',
        description: 'Manage customers',
    },
    host: host, // Change this to your actual host
    schemes: lane === 'local' ? ['http'] : ['https'], // Use 'https' if applicable

    // adding the member API definition
    employeeAPI: {
        title: 'Employee API',
        version: '1.0.0',
        description: 'Manage employees',
    },
    host: host, // Change this to your actual host
    schemes: lane === 'local' ? ['http'] : ['https'], // Use 'https' if applicable
});
const routes = ['./routes/index.js'];

swaggerAutoGen(
    `./swagger-output-${process.env.CURRENT_LANE}.json`,
    routes,
    swaggerDefinition(process.env.HOST, process.env.CURRENT_LANE)
).then(() => {
    require('./server.js'); // project root file
});