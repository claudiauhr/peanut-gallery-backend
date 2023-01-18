import Express from "express";
import { APIHandler } from "../controllers/api/api-handler.js";
import Trivia from "../controllers/api/trivia.js";
import isAuth from '../middleware/authenticated.js'

/**
 * Defines the delete API router.
 */
const DELETE_ROUTER = Express.Router();

/**
 * Sets the route handlers and returns the router instance
 */
export const ROUTES = () => {

    DELETE_ROUTER.delete('/', APIHandler.handleDefault);
    DELETE_ROUTER.delete('/trivia/:id', isAuth, Trivia.handleDelete);
    return DELETE_ROUTER;
}