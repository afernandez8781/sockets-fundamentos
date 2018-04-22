var socket = io();

socket.on("connect", function() {
    console.log("Conectado al servidor");
});
// para escuchar
socket.on("disconnect", function() {
    console.log("Perdimos conexión cn el servidor");
});

// Enviar información
socket.emit(
    "enviarMensaje", {
        usuario: 'Alfredo',
        mensaje: "Hola mundo"
    },
    function(resp) {
        console.log("respuesta server: ", resp);
    }
);

// Escuchar información
socket.on("enviarMensaje", function(mensaje) {
    console.log("Servidor:", mensaje);
});