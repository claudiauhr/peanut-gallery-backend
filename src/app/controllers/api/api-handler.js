import Mongoose from 'mongoose';

/**
 * Used for abstraction, APIHandler is a worker for wrapping
 * mongoose methods and referencing them with the passed constructor {Mongoose.Model}.
 * 
 * @function handleCreate(),handleRead(),handleUpdate(),handleDelete()
 * 
 * All handle methods require implementation of extended APIHandler.
 */
export class APIHandler {

    /**
     * APIHandler constructor must be passed a valid mongoose model containing
     * a schema otherwise an error will be thrown for invalidation.
     * 
     * @param {*} model mongoose schema model can only be passed here.
     */
    constructor (model) {

        if (!model || !(model.schema instanceof Mongoose.Schema)) {
            throw (new Error (`APIHandler - class ${this.constructor.name} must pass a mongoose Schema model to the constructor!`));
        }

        this.MODEL = model;
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

    /**
     * Utility method for checking if an object is empty.
     * 
     * @param {*} obj 
     * @returns true if 0 length
     */
    #objectEmpty = (obj) => {

        return Object.keys(obj).length === 0;
    }
    
    /**
     * Utility method for checking if an object is of the same type passed.
     * 
     * @param {*} obj 
     * @param {*} type to check
     * @returns true if {obj} is of same {type}
     */
    #sameType = (obj, type) => {

        return (typeof obj === type);
    }

}