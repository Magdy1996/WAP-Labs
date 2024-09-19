
import Product from "./product";
const product1 = new Product(1, 'Laptop', 1200, 'A high-performance laptop');
const product2 = new Product(2, 'Smartphone', 800, 'A latest-model smartphone');

product1.save();
product2.save();

console.log(Product.fetchAll());

const foundProduct = Product.findById(1);
console.log(foundProduct);

product1.price = 1000; // Change the price
product1.update(); // Update the product in the array

// Delete a product by id
Product.deleteById(2);
console.log(Product.fetchAll());
