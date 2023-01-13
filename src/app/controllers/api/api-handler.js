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

    handleCreate = (request, response) => {

    }

    handleRead = (request, response) => {

    }

    handleUpdate = (request, response) => {

    }

    handleDelete = (request, response) => {

    }

}