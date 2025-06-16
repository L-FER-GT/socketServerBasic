const Product = require("./product");

class ProductList {
   constructor() {
      this.products = [
         new Product("Milk"),
         new Product("Banana"),
         new Product("Cake"),
         new Product("Takis"),
      ];
   }

   addProduct(name) {
      const newProduct = new Product(name);
      this.products.push(newProduct);
      return this.products;
   }

   removeProduct(id) {
      this.products = this.products.filter((currProduct) => {
         return id !== currProduct.id;
      });
   }

   getProducts() {
      return this.products;
   }

   increaseAmount(id) {
      this.products = this.products.map((currProduct) => {
         if (currProduct.id === id) {
            currProduct.amount += 1;
         }
         return currProduct;
      });
   }

   decreaseAmount(id) {
      this.products = this.products.map((currProduct) => {
         if (currProduct.id === id) {
            currProduct.amount -= 1;
         }
         return currProduct;
      });
   }

   changeProductName(id, newName) {
      this.products = this.products.map((currProduct) => {
         if (currProduct.id === id) {
            currProduct.name = newName;
         }
         return currProduct;
      });
   }
}


module.exports = ProductList;
