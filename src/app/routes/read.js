import Express from "express";
import { APIHandler } from "../controllers/api/api-handler.js";
import Trivia from "../controllers/api/trivia.js";
import Account from '../controllers/api/account.js';

/**
 * Defines the read(get) API router.
 */
const READ_ROUTER = Express.Router();

/**
 * Sets the route handlers and returns the router instance
 */
export const ROUTES = () => {

    READ_ROUTER.get('/', APIHandler.handleDefault);
    READ_ROUTER.get('/trivia/:id', Trivia.handleRead);
    READ_ROUTER.post('/login', Account.handleRead);

    return READ_ROUTER;
}