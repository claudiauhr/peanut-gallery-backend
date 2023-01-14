import Express from 'express';
import Mongoose from 'mongoose';
import DotENV from 'dotenv';
import { ROUTES as CREATE_ROUTER } from './routes/create.js';

/**
 * Express instance reference for the API.
 */
const WEB_SERVER = Express();

/**
 * Configure environmental variables.
 */
DotENV.config();

/**
 * Deconstruct environmental variables.
 */
const { PORT, DATABASE_URI, APP_NAME } = process.env;

/**
 * Binds the routes to the application running state.
 */
const bindRoutes = () => {

    // Sets the router for API creation calls.
    WEB_SERVER.use('/c', CREATE_ROUTER());

    console.log(`${APP_NAME} - successfully bound routes...`)
}

/**
 * Binds middleware for API use.
 */
const bindMiddleware = () => {

    // Sets the middleware for parsing json content.
    WEB_SERVER.use(Express.json());

    console.log(`${APP_NAME} - successfully bound middleware...`)
}

/**
 * Establishes and binds the mongoDB connection.
 */
const bindDatabase = () => {

    Mongoose.set('strictQuery', true);

    Mongoose.connect(DATABASE_URI);

    Mongoose.connection.on('error', error => console.log(`${APP_NAME} - an error has occured while connecting to MongoDB: ${error.message}...`));

    Mongoose.connection.on('connected', () => {

        console.log(`${APP_NAME} - mongoDB successfully connected on ${Mongoose.connection.port}...`)

        WEB_SERVER.listen(PORT, () => {

            console.log(`${APP_NAME} - successfully listening for connections on port ${PORT}...`)
        });
    });
}

/**
 * Builds the API and binds requirements.
 */
export const build = () => {

    // Don't reorder this, will break application.
    bindMiddleware();
    bindRoutes();
    bindDatabase();
}