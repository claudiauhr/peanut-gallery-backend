import Obj from '../../../utils/obj.js';
import { Server } from 'socket.io'

export class Packet {


    /**
     * Packet constructor must be passed a valid Server socket.io instance
     * as well as a valid packetId of type String.
     * 
     * @param {*} type
     */
    constructor (serverSocket, packetId) {

        if (!serverSocket || !Obj.equals(serverSocket, Server)) {
            throw new Error(`Packet - class ${this.constructor.name} must pass a type of Server(socket.io) to the constructor!`);
        }

        if (!packetId || !Obj.equals(packetId, String)) {
            throw new Error(`Packet - class ${this.constructor.name} can not construct an empty packetId!`);
        }

        this.serverSocket = serverSocket;
        this.packetId = packetId;
    }
    
    /**
     * Handles an event when an incoming packet matches. This abstract method
     * requires implementation.
     */
    handle = () => {

        throw (new Error (`Packet - class ${this.constructor.name} must implement handle()!`));
    }

    /**
     * Getter for the server socket instance for socket communication.
     * 
     * @returns the serverSocket.
     */
    getServerSocket = () => this.serverSocket;

    /**
     * Getter for the packet identifier. Used for mapping invoming events to packet handlers.
     * 
     * @returns the packetId.
     */
    getPacketId = () => this.packetId;
}