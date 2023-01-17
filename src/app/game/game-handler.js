import { Trivia } from "./trivia.js";

/**
 * Stores active game sessions by ID.
 */
const GAME_SESSIONS = {}

/**
 * Handles creating a new game session.  Method will return
 * the existing game session if one already exists for the {id}
 * 
 * @param {*} id represent the id of the game session.
 * @returns {Trivia} instance.
 */
export const createGameSession = async (id, hostSocket, maxPlayers) => {

    if (id in GAME_SESSIONS) {

        return GAME_SESSIONS[id].get;
    }

    return (GAME_SESSIONS[id] = await Trivia.createInstance(hostSocket, maxPlayers, '63c6eeb8ce851d190f8ae82c'));
}

/**
 * Getter for grabbing a game session. If the session id does not
 * exist, a null value will be returned. This method must be type checked
 * where implemented to avoid application crashes for undefined references.
 * 
 * @param {*} id the game session identifier.
 * @returns {Trivia}
 */
export const getGameSession = (id) => {

    return (!(id in GAME_SESSIONS) ? null : GAME_SESSIONS[id]);
}