class Sockets {
   constructor(io) {
      this.io = io;
      this.socketEvents();
   }

   socketEvents() {
      // On connection
      this.io.on("connection", (socket) => {
         //escuchar evento: mensaje to server
         socket.on("mensaje-to-server", (data) => {
            this.io.emit("mensaje-from-server", { msg: data.msg });
         });
      });
   }
}

module.exports = Sockets;
