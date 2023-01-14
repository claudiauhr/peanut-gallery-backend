import Express from "express";
import { APIHandler } from "../controllers/api/api-handler.js";

/**
 * Defines the update(put) API router.
 */
const UPDATE_ROUTER = Express.Router();

/**
 * Sets the route handlers and returns the router instance
 */
export const ROUTES = () => {

    UPDATE_ROUTER.put('/', APIHandler.handleDefault);

    return UPDATE_ROUTER;
}