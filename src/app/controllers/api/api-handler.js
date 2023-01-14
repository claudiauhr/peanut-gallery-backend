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
     * Creates a new mongoDB document entry.
     * 
     * @param {*} data  the data to submit to the document.
     * @param {*} callback optional callback.
     * @returns mongoose creation result.
     */
    create = async (data, callback) => {

        const result = await this.MODEL.create(data).catch((error) => (error));

        if (this.#sameType(callback, 'function')) callback(result);

        return result;
    }

    /**
     * Locates a document by id if it exists.
     * 
     * @param {*} id the id of the document.
     * @param {*} callback optional callback.
     * @returns mongoose result.
     */
    findById = async (id, callback) => {

        const result = await this.MODEL.findById({_id: id}).catch((error) => (error));

        if (this.#sameType(callback, 'function')) callback(result);

        return result === null ? { message: `_id: ${id} not found for model '${this.MODEL.collection.collectionName}'` } : result;
    }

    /**
     * Deletes a document entry by id.
     * 
     * @param {*} id  the id of the document.
     * @param {*} callback optional callback.
     * @returns mongoose deletion result.
     */
    deleteById = async (id, callback) => {

        const result = await this.MODEL.deleteOne({_id: id}).catch((error) => (error));

        if (this.#sameType(callback, 'function')) callback(result);

        return result;
    }

    /**
     * Locates a document by id if it exists and edits the document
     * based on the passed object {to}.
     * 
     * @param {*} id the id of the document.
     * @param {*} to the key/value pairs to update.
     * @param {*} callback optional callback.
     * @returns result of document edit.
     */
    edit = async (id, to, callback) => { 

        if (!this.#sameType(to, 'object')) {

            throw new Error(`Error: argument 'to' in APIHandler.update -> ${this.constructor.name} is not of type Object!`);

        } else if (this.#objectEmpty(to)) {

            return ( { message: `argument 'to' in APIHandler.update -> ${this.constructor.name} cannot have empty properties!` } );
        }

        const result = await this.MODEL.findByIdAndUpdate(id, to, { new: true }).catch((error) => (error));

        if (this.#sameType(callback, 'function')) callback(result);

        return result === null ? { message: `_id: ${id} not found for model '${this.MODEL.collection.collectionName}'` } : result;
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