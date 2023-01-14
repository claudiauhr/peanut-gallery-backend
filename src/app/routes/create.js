import Express from "express";
import { APIHandler } from "../controllers/api/api-handler.js";

/**
 * Defines the create(post) router reference.
 */
const CREATE_ROUTER = Express.Router();

/**
 * Sets the route handlers and returns the router instance/
 */
export const ROUTES = () => {

    CREATE_ROUTER.post('/', APIHandler.handleDefault);

    return CREATE_ROUTER;
}