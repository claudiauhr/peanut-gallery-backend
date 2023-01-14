import Express from "express";
import { APIHandler } from "../controllers/api/api-handler.js";

/**
 * Defines the read(get) API router.
 */
const READ_ROUTER = Express.Router();

/**
 * Sets the route handlers and returns the router instance
 */
export const ROUTES = () => {

    READ_ROUTER.get('/', APIHandler.handleDefault);

    return READ_ROUTER;
}