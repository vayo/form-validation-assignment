'use strict';

const Hapi = require('hapi');
const Joi = require('joi');

// Create a server with a host and port
const server = Hapi.server({
    host: 'localhost',
    port: 8000,
    routes: {
        validate: {
            failAction: async (request, h, err) => {
                throw err;
            },
            options: {
                abortEarly: false
            }
        }
    }
});

server.route({
    method: 'POST',
    path: '/form',
    handler: function (request, h) {
        return request.payload;
    },
    options: {
        validate: {
            payload: {
                userData: Joi.object().keys({
                    email: Joi.string().email().required(),
                    name: Joi.object().keys({
                        firstname: Joi.string().required(),
                        lastname: Joi.string().required()
                    }).required(),
                }).required(),
                actions: Joi.array().items(Joi.string()).min(3).unique().required()
            }
        }

    }
});

// Start the server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();
