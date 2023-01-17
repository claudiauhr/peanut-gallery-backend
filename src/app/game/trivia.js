export class Trivia {

    /**
     * The socket id representing the host.
     */
    hostSocket;

    /**
     * The maximum amount of clients able to connect.
     */
    maxPlayers = 4;

    /**
     * Array containing a list of connected socket clients.
     */
    SOCKET_CONNECTIONS = [];

    constructor(hostSocket, maxPlayers) {
        this.hostSocket = hostSocket;
        this.maxPlayers = maxPlayers;
    }
}