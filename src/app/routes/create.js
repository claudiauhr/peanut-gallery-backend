import Express from "express";
import { APIHandler } from "../controllers/api/api-handler.js";
import Trivia from "../controllers/api/trivia.js";
import User_Schema from "../controllers/api/auth.js"
import isAuth from '../middleware/authenticated.js'

/**
 * Defines the create(post) router reference.
 */
const CREATE_ROUTER = Express.Router();

/**
 * Sets the route handlers and returns the router instance
 */
export const ROUTES = () => {

    CREATE_ROUTER.post('/', APIHandler.handleDefault);
    CREATE_ROUTER.post('/trivia', isAuth, Trivia.handleCreate);
    CREATE_ROUTER.post('/register', User_Schema.handleCreate)

    return CREATE_ROUTER;
}