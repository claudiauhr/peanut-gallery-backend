import Express from 'express'
import Passport from 'passport'
import User_Schema from '../../models/user-schema.js';
import { APIHandler } from './api-handler.js';

class User extends APIHandler {

    // Registration
    handleCreate = async (request, response) => {
        const newAccount = await User_Schema.create({ username: request.body.username });
        await User_Schema.register(newAccount, request.body.password, (error) => {
            if (error) {
                console.log(error)
            }
        })
    }

    // Login
    handleRead = async (request, response) => {
        const ID = request.body.id
        const USER_INFO = await this.findById(ID)
        response.json(USER_INFO)
    }


    //Logout
    handleDelete = async (request, response) => {
        request.session.destroy(() => {
            response.json({})
        })
    }

}

export default new User(User_Schema)