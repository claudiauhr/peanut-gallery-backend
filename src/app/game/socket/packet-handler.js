import FILE_SYSTEM from 'fs';

/**
 * Container object for packet data.
 */
const PACKETS = {};

/**
 * Holds the relative path to packets.
 */
const PACKETS_PATH = './packets/';

/**
 * Holds the absolute path to packets.
 */
const ABSOLUTE_PACKETS_PATH = './src/app/game/socket/packets/';

/**
 * Getter for the PACKETS object.
 * 
 * @returns {PACKETS}
 */
export const getPackets = () => PACKETS;

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