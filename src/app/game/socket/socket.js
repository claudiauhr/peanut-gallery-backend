import { Server as ServerSocket } from 'socket.io';
import { buildPackets, getPackets } from './packet/packet-handler.js';

/**
 * The {ServerSocket} instance.
 */
let SERVER_SOCKET = undefined;

/**
 * Get the ServerSocket instance for static access.
 * 
 * @returns {this.SERVER_SOCKET}
 */
const get = () => this.SERVER_SOCKET;

/**
 * binds the connection listener to the {SERVER_SOCKET}.
 */
const bindConnectionListener = () => {

    SERVER_SOCKET.on('connection', socket => {

        socket.emit('user connect', 'Successfully connected!');

        socket.onAny((packet, payload) => {

            getPackets()[packet].handle(socket, payload)
        })
    });
}

/**
 * Attaches the HTTP server to a new ServerSocket instance. This
 * allows Socket to listen for incoming packet data on the same port.
 * 
 * @param {*} server {http}
 * @returns {Socket} instance.
 */
export const attachSocket = async (server) => {

    SERVER_SOCKET = new ServerSocket(server);

    await buildPackets();

    bindConnectionListener();
}