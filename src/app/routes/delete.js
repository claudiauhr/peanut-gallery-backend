import Express from "express";
import { APIHandler } from "../controllers/api/api-handler.js";

/**
 * Defines the delete API router.
 */
const DELETE_ROUTER = Express.Router();

/**
 * Sets the route handlers and returns the router instance
 */
export const ROUTES = () => {

    DELETE_ROUTER.delete('/', APIHandler.handleDefault);

    return DELETE_ROUTER;
}