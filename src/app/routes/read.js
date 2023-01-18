import Express from "express";
import { APIHandler } from "../controllers/api/api-handler.js";
import Trivia from "../controllers/api/trivia.js";
import User from "../controllers/api/auth.js"
import Passport from 'passport'
import isAuth from '../middleware/authenticated.js'

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
    READ_ROUTER.get('/login', Passport.authenticate('local'), User.handleRead)

    return READ_ROUTER;
}