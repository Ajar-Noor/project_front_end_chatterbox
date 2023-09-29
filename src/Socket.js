import { io } from 'socket.io-client';

let socket;

const connectSocket = (token) => {
    socket = io("http://localhost:3001", {
        query: `token=${token}`
    });
}

export { socket, connectSocket }
