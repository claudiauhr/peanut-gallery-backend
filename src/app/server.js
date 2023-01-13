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


}

/**
 * Binds middleware for API use.
 */
const bindMiddleware = () => {


}

/**
 * Establishes and binds the mongoDB connection.
 */
const bindDatabase = () => {


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