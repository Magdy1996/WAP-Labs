"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("./product"));
const product1 = new product_1.default(1, 'Laptop', 1200, 'A high-performance laptop');
const product2 = new product_1.default(2, 'Smartphone', 800, 'A latest-model smartphone');
product1.save();
product2.save();
console.log(product_1.default.fetchAll());
const foundProduct = product_1.default.findById(1);
console.log(foundProduct);
product1.price = 1000; // Change the price
product1.update(); // Update the product in the array
// Delete a product by id
product_1.default.deleteById(2);
console.log(product_1.default.fetchAll());
