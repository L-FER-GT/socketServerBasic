const ProductList = require("./product-list");

class Sockets {
   constructor(io) {
      this.io = io;
      this.productList = new ProductList();
      this.socketEvents();
   }

   socketEvents() {
      // On connection
      this.io.on("connection", (socket) => {
         console.log("Cliente conectado: ",socket.id);

         //Emititr al cliente conectado, todas los productos actuales
         socket.emit("current-products", this.productList.getProducts());

         //Incrementar productos
         socket.on("increment-product", ({ id }) => {
            this.productList.increaseAmount(id);
            this.io.emit("current-products", this.productList.getProducts());
         });

         //Borrar producto
         socket.on("delete-product", ({ id }) => {
            this.productList.removeProduct(id);
            this.io.emit("current-products", this.productList.getProducts());
         });

         //Rename producto
         socket.on("rename-product", ({ id, newName }) => {
            this.productList.changeProductName(id, newName);
            this.io.emit("current-products", this.productList.getProducts());
         });

         //Add producto
         socket.on("add-product", ({ newNameProduct }) => {
            this.productList.addProduct(newNameProduct);
            this.io.emit("current-products", this.productList.getProducts());
         });
      });
   }
}

module.exports = Sockets;
