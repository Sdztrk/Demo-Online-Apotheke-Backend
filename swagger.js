"use strict"


const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Online Apotheke',
        description: 'This API is designed to sell medicines online.'
    },
    host: 'https://online-apotheke-v1-api.onrender.com',
    securityDefinitions: {
        JWT: {
            type: 'apiKey',
            in: 'header',
            name: 'Authorization',
            description: 'Enter Your AccessToken (JWT) for Login. Example: <b>Bearer <i>...token...<i></b>'
        }
    },
    security: [{ "JWT": true }],
};

const outputFile = './swagger.json';
const routes = ['./index.js'];

swaggerAutogen(outputFile, routes, doc);