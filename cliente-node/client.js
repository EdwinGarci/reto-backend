// client.js

const io = require('socket.io-client');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function connectToServer(jwtToken) {
    // Conectar al servidor WebSocket con el JWT en los headers
    const socket = io('http://localhost:3000', {
        extraHeaders: {
            authentication: `${jwtToken}`
        }
    });

    // Mostrar el estado de conexión en la consola
    console.log('Connecting to WebSocket server...');

    // Evento de conexión
    socket.on('connect', () => {
        console.log('Conectado al servidor WebSocket');
    });

    // Recibir mensajes del servidor
    socket.on('message-from-server', (data) => {
        console.log('Mensaje recibido del servidor:', data);
    });

    // Manejar errores de conexión
    socket.on('connect_error', (err) => {
        console.error('Error de conexión:', err.message);
    });

    // Manejar la desconexión
    socket.on('disconnect', () => {
        console.log('Desconectado del servidor WebSocket');
    });

    // Leer mensajes desde la consola y enviarlos al servidor
    rl.on('line', (input) => {
        if (input.trim().length > 0) {
            socket.emit('message-from-client', { message: input });
        }
    });
}

// Solicitar el JWT al usuario
rl.question('Ingrese su JWT: ', (jwtToken) => {
    if (jwtToken.trim().length <= 0) {
        console.log('Ingrese un JWT válido');
        rl.close();
        return;
    }
    connectToServer(jwtToken.trim());
});
