import Packet from "../packet.js"

/**
 * A {Ping} represents the initial connection a client makes to 
 * the server socket. For experiment testing.
 */
class Ping extends Packet {

    handle = (socket, payload) => {

        socket.emit('pong', 'pong');
    }
}

export const get = () => {

    return new Ping('ping');
}