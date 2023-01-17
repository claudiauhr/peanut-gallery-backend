import FILE_SYSTEM from 'fs';

/**
 * Container object for packet data.
 */
const PACKETS = {

    "NOT_FOUND": {

        handle: (socket, payload, packetId) => console.log(`Undefined packet: '${packetId}' was received and is not a valid packet!`)
    }
};

/**
 * Holds the relative path to packets.
 */
const PACKETS_PATH = './inbound/';

/**
 * Holds the absolute path to packets.
 */
const ABSOLUTE_PACKETS_PATH = './src/app/game/socket/packet/inbound';

/**
 * Getter for the PACKETS object.
 * 
 * @returns {PACKETS}
 */
export const getPackets = () => PACKETS;

/**
 * Getter for a specific  key/value packet pair. If the key does
 * not exist, a default {NOT_FOUND} value will be returned.
 * 
 * @param {*} id 
 * @returns 
 */
export const getPacket = id => {

    return ((id in PACKETS) ? PACKETS[id] : PACKETS.NOT_FOUND)
}

/**
 * Grabs and array containing packet file paths.
 * 
 * @returns 
 */
const packetList = () => {
    
    return FILE_SYSTEM.readdirSync(ABSOLUTE_PACKETS_PATH);
}

/**
 * A builder function that iterates over the 'packets' directory to dynamically load
 * and bind {Packet} implementations.
 * 
 * NOTE: It is very important that no other files are created within the root 'packet' directory.
 */
export const buildPackets = async () => {

    for (let file of packetList()) {

        const PACKET = await import(PACKETS_PATH + file);
        
        PACKETS[`${PACKET.get().getPacketId()}`] = {

            handle: (socket, payload) => {

                PACKET.get().handle(socket, payload);
            }
        }
    }

    console.log(`${process.env.APP_NAME} - successfully bound ${Object.keys(PACKETS).length} packets to socket listener...`)
}