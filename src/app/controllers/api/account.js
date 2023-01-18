import { APIHandler } from "./api-handler.js";
import { ACCOUNT_MODEL } from "../../models/account-schema.js";

class Account extends APIHandler {

    handleCreate = async (request, response) => {
        
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