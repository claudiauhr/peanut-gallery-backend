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

}

export default new Trivia(TRIVIA_MODEL);

