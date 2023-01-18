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

    handleRead = async (request, response) => {

        const FIND = { username: request.body.username };

        const ACCOUNT = await this.findFirst(FIND);

        if (ACCOUNT) {

            if (await matchesHashed(!request.body.password ? 'nothing' : request.body.password, ACCOUNT.password)) {
                request.session.isLoggedIn = true;

                return response.json(ACCOUNT);

            } else {

                return response.json({
                    error: 'You entered an invalid password!'
                });

            }

        }

        return response.json({
            error: `Account for ${request.body.username} was not found!`
        });
    }

    handleDelete = (request, response) => {

    }

    handleUpdate = (request, response) => {

    }

}

export default (new Account(ACCOUNT_MODEL));