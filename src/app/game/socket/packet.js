import Obj from '../../utils/obj.js';

/**
 * A Packet represents a package of data meant to be transmitted
 * through a socket connection. Each implementation of a Packet
 * should have a unique identifier. Packet implementations are
 * automatically loaded into memory at run time.
 */
export default class Packet {

    /**
     * Packet constructor must be passed a valid packetId of type String.
     * 
     * @param {*} type
     */
    constructor (packetId) {

        if (!packetId || !Obj.is(packetId, 'string')) {
            throw new Error(`Packet - class ${this.constructor.name} can not construct an empty packetId!`);
        }

        this.packetId = packetId;
    }
    
    /**
     * Handles an event when an incoming packet matches. This abstract method
     * requires implementation.
     */
    handle = (socket, payload) => {

        throw (new Error (`Packet - class ${this.constructor.name} must implement handle()!`));
    }

    /**
     * Getter for the packet identifier. Used for mapping invoming events to packet handlers.
     * 
     * @returns the packetId.
     */
    getPacketId = () => this.packetId;
}