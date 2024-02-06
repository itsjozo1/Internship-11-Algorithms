let fruits = [];

/* fruits = [
    { name: "Strawberry", price: 100, isAvailable: true },
    { name: "Banana", price: 50, isAvailable: true },
    { name: "Watermelon", price: 120, isAvailable: false },
    { name: "Peach", price: 100, isAvailable: true },
    { name: "Apple", price: 80, isAvailable: false },
    { name: "Lemon", price: 100, isAvailable: true }
]; */

do {
    let name = prompt("Enter name of fruit:");
    let price;
    do {
        price = Math.abs(Number(prompt("Enter price of fruit:")));
    } while (isNaN(price) || price === 0);
    let isAvailable = confirm("Is the fruit available?");

    fruits.push({ name, price, isAvailable });
} while (confirm("Do you want to enter a new fruit?"));

const unavailableFruitsIndexes = fruits.reduce((indexes, fruit, index) => {
    if (!fruit.isAvailable) {
        indexes.push(index);
    }
    return indexes;
}, []);

const availableFruits = fruits.filter(fruit => fruit.isAvailable).sort((a, b) => {
    if (a.price === b.price) {
       return a.name.localeCompare(b.name);
    }
    return a.price - b.price;
});

const unavailableFruitsPrice = fruits.filter(fruit => !fruit.isAvailable).reduce((acc, fruit) => acc + fruit.price, 0);
const totalFruitsPrice = fruits.reduce((acc, fruit) => acc + fruit.price, 0);

let unavailableFruitsPercentage = (unavailableFruitsPrice / totalFruitsPrice) * 100;

console.log("All fruits:", fruits);
console.log("Unavailable fruits:", unavailableFruitsIndexes);
console.log("Available fruits:", availableFruits);
console.log("Percentage of unavailable fruits price:", unavailableFruitsPercentage.toFixed(2));

