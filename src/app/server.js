import Express from 'express';
import Mongoose from 'mongoose';
import DotENV from 'dotenv';
import Http from 'http';
import { Server as SocketServer } from 'socket.io';
import { ROUTES as CREATE_ROUTER } from './routes/create.js';
import { ROUTES as READ_ROUTER} from './routes/read.js';
import { ROUTES as UPDATE_ROUTER } from './routes/update.js';
import { ROUTES as DELETE_ROUTER } from './routes/delete.js';

/**
 * Express instance reference for the API.
 */
const APPLICATION = Express();

/**
 * Creates the http server using the express application.
 * This allows Socket.io to use the same port connection.
 */
const WEB_SERVER = Http.createServer(APPLICATION);

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

    // Sets the router for API creation calls
    APPLICATION.use('/c', CREATE_ROUTER());
    // Sets the router for API read calls
    APPLICATION.use('/r', READ_ROUTER());
    // Sets the router for API update calls
    APPLICATION.use('/u', UPDATE_ROUTER());
    // Sets the router for API delete calls
    APPLICATION.use('/d', DELETE_ROUTER());

    console.log(`${APP_NAME} - successfully bound routes...`)
}

/**
 * Binds middleware for API use.
 */
const bindMiddleware = () => {

    // Sets the middleware for parsing json content.
    APPLICATION.use(Express.json());

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
            bindSocketIO();
        });
    });
}

const bindSocketIO = () => {

    const IO = new SocketServer(WEB_SERVER);

    // Allows access to the public folder.
    APPLICATION.use(Express.static('public'));

    APPLICATION.get('/', (request, response) => {
        response.sendFile('/public/index.html');
    });

    IO.on('connection', (socket) => {
        console.log('A new user connection was detected!');
        socket.emit('user connect', 'Connection Established!');

        socket.on('ping', () => {
            socket.emit('pong', 'pong');
        });
    });

    console.log(`${APP_NAME} - successfully attached socket.io to port ${PORT}...`)
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