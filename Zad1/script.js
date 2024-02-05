let products = [];

do {
    let name;
    do {
        name = prompt("Enter product name:");
    } while (name == "");
    let price = Number(prompt("Enter product price:"));
    while(isNaN(price) || price==""){
        price = Number(prompt("Invalid price, enter again:"));
    }
    let color;
    do {
        color = prompt("Enter product color:");
    } while (color == "");
    products.push({ name: name, price: price, color: color });
}while(confirm("Do you want to continue entering products?"));

let totalPrice = products.reduce((sum, product) => sum + product.price, 0);
let average = totalPrice / products.length;

let maxDevProduct = products.reduce((maxDev, product) => {
    let deviation = Math.abs(product.price - average);
    return deviation > Math.abs(maxDev.price - average) ? product : maxDev;
}, products[0]);

console.log("Products: ", products);
console.log("Average price of products: " + average.toFixed(2));
console.log("Max deviation product Name: " + maxDevProduct.name);
console.log("Max deviation product Price: " + maxDevProduct.price.toFixed(2));
console.log("Max deviation product Color: " + maxDevProduct.color);