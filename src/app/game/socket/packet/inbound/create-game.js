import { createGameSession, getGameSession } from "../../../game-handler.js";
import Packet from "../packet.js";

class CreateGame extends Packet {

    handle = async (socket, payload) => {

        if (!(getGameSession(payload) === null)) return socket.emit('session exists', 'Session already exists!');

        const NEW_SESSION = await createGameSession(payload, socket.id, 4);

        NEW_SESSION.join(socket.id);
        socket.join(payload);
        socket.emit('created game', `Game room created - ${payload.toUpperCase()}`);
    }
}

export const get = () => {

    return (new CreateGame('create game'));
}