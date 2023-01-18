import { getGameSession } from "../../../game-handler.js";
import Packet from "../packet.js";

class JoinGame extends Packet {

    handle = (socket, payload) => {
        
        const GAME_SESSION = getGameSession(payload);

        if (GAME_SESSION === null) return socket.emit('no session', 'Session ID not found...');

        if (GAME_SESSION.join(socket.id)) {

            socket.join(payload);
            socket.emit('joined', 'Successfully connected to session...');
        }
    }
}

export const get = () => {

    return (new JoinGame('join game'));
}