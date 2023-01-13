import Mongoose from 'mongoose';

export class APIHandler {

    constructor (model) {

    }

    /**
     * Default handler method for a get request on root API routes.
     * 
     * @param {*} request 
     * @param {*} response 
     */
    static handleDefault = (request, response) => {

        response.json({
            error: 'This is not a valid API route!'
        })
    }

    /**
     * Handles a create(post) request. Forced abstraction of {APIHandler} implementation.
     * 
     * @param {*} request 
     * @param {*} response 
     * 
     * @throws error if not implemented by inheriting class
     */
    handleCreate = (request, response) => {

        throw new Error(`Error: handleCreate() must be implemented for APIHandler -> ${this.constructor.name} abstraction!`);
    }

    /**
     * Handles delete requests. Forced abstraction of {APIHandler} implementation.
     * 
     * @param {*} request 
     * @param {*} response 
     * 
     * @throws error if not implemented by inheriting class
     */
    handleDelete = (request, response) => {

        throw new Error(`Error: handleDelete() must be implemented for APIHandler -> ${this.constructor.name} abstraction!`);
    }

    /**
     * Handles a read(get) request for a document.  Forced abstraction of {APIHandler} implementation.
     * 
     * @param {*} request 
     * @param {*} response 
     * 
     * @throws error if not implemented by inheriting class
     */
    handleRead = (request, response) => {

        throw new Error(`Error: handleRead() must be implemented for APIHandler -> ${this.constructor.name} abstraction!`);
    }

    /**
     * Handles a request for editing an existing document.  Forced abstraction of {APIHandler} implementation.
     * 
     * @param {*} request 
     * @param {*} response 
     */
      handleUpdate = (request, response) => {

        throw new Error(`Error: handleUpdate() must be implemented for APIHandler -> ${this.constructor.name} abstraction!`);
    }

}