import Express from 'express';
import Mongoose from 'mongoose';
import DotENV from 'dotenv';

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

    WEB_SERVER.listen(PORT, () => {

        console.log(`${APP_NAME} - successfully listening for connections on port ${PORT}...`)
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