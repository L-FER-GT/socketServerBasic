const { v4: uuidv4 } = require("uuid");

class Product {
   constructor(name) {
      this.id = uuidv4();
      this.name = name;
      this.amount = 0;
   }
}

module.exports = Product;
