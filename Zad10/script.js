let fruits = [];

do {
    let name = prompt("Enter fruit name:");
    let color = prompt("Enter fruit color:");
    let price;
    do {
        price = Math.abs(Number(prompt("Enter fruit price:")));
    } while (isNaN(price) || price === 0);

    fruits.push({name, color, price});
} while (confirm("Do you want to enter new fruit?"));

/* let fruits = [
    { name: "Apple", color: "Red", price: 1.99 },
    { name: "Bananaaaa", color: "Yellow", price: 0.79 },
    { name: "Orange", color: "Orange", price: 0.69 },
    { name: "Grapees", color: "Purple", price: 2.49 },
    { name: "Strawberry", color: "Red", price: 3.99 },
    { name: "Kiwi", color: "Red", price: 1.49 },
    { name: "Pineapple", color: "Yellow", price: 2.99 }
]; */

let fruitsByColor = {};
fruits.forEach(fruit => {
    fruitsByColor[fruit.color] = fruitsByColor[fruit.color] || [];
    fruitsByColor[fruit.color].push(fruit);
});

const findCheapestProduct = (fruitByColor) =>{
    fruitByColor.sort((a, b) => a.price - b.price);
    return fruitByColor[0];
}

let boughtFruits = [];
let max = 0;
for (let color in fruitsByColor) {
    let cheapestFruit = findCheapestProduct(fruitsByColor[color]);
    boughtFruits.push(cheapestFruit);
    max += cheapestFruit.price;
}

console.log("Fruits grouped by color:");
console.log(fruitsByColor);
console.log("Bought fruits:", boughtFruits.sort((a, b) => a.name.toString().length - b.name.toString().length));
console.log("Total cost:", max.toFixed(2));
