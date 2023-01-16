import Packet from "../packet.js";

class Disconnect extends Packet {

    handle = (socket) => {

        socket.disconnect();
    }

}

export const get = () => {

    return (new Disconnect('disconnect'));
}