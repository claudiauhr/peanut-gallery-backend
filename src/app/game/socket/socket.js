import { Server as ServerSocket } from 'socket.io';

class Socket {

    SERVER_SOCKET = undefined;

    /**
     * Get the ServerSocket instance for static access.
     * 
     * @returns {this.SERVER_SOCKET}
     */
    get = () => this.SERVER_SOCKET;
    
    /**
     * Attaches the HTTP server to a new ServerSocket instance. This
     * allows Socket to listen for incoming packet data on the same port.
     * 
     * @param {*} server {http}
     * @returns {Socket} instance.
     */
    attach = (server) => {
    
        this.SERVER_SOCKET = new ServerSocket(server);
    
        return this;
    }

    /**
     * 
     */
    buildPackets = (appName) => {

        import('./packets/connection.js').then((packet) => {
    
            this.SERVER_SOCKET.on(packet.get().getPacketId(), packet.get().handle)
        })

        console.log(`${appName} - successfully bound packets to socket listener...`)
    }

}

export default (new Socket());