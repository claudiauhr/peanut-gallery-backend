import { APIHandler } from "./api-handler.js";
import { TRIVIA_MODEL } from "../../models/trivia-set-schema.js";

/**
 * A core and example implementation of the APIHandler abstraction.
 * This shows the benefit of reusable code and requirements of implementation.
 */
class Trivia extends APIHandler {

    handleCreate = async (request, response) => {

        const TRIVIA_SET = await this.create(request.body);

        response.json(TRIVIA_SET);
    }

    handleDelete = async (request, response) => {

        const ID = request.params.id;
        const DELETED_TRIVIA_SET = await this.deleteById(ID);

        response.json(DELETED_TRIVIA_SET);
    }

    handleRead = async (request, response) => {

        const TITLE = request.body.title;
        const TRIVIA_SET = await this.findFirst({ title: TITLE });

        response.json(TRIVIA_SET);
    }

    handleUpdate = async (request, response) => {

        const ID = request.params.id;
        const EDITED_TRIVIA_SET = await this.edit(ID, request.body);

        response.json(EDITED_TRIVIA_SET);
    }

    handleReadAllOf = async (request, repsonse) => {

        const TRIVIA_MATCHES = await this
    }

}

export default new Trivia(TRIVIA_MODEL);

