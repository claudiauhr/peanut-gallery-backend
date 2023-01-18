import { APIHandler } from "./api-handler.js";
import { ACCOUNT_MODEL } from "../../models/account-schema.js";
import { generateHashed, matchesHashed } from '../../utils/hashing.js'

class Account extends APIHandler {

    handleCreate = async (request, response) => {

        //TODO need to implement error handling!

        request.body.password = await generateHashed(request.body.password);
        
        const NEW_ACCOUNT = await this.create(request.body);

        response.json(NEW_ACCOUNT);
    }

    handleRead = (request, response) => {


    }

    handleDelete = (request, response) => {

    }

    handleUpdate = (request, response) => {

    }

}

export default (new Account(ACCOUNT_MODEL));