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

let fruitsWithColors = fruits.map(fruit => {
    if (fruit.isAvailable) {
        return {...fruit, color: "Yellow"}
    } 
    return {...fruit, color: "Red"}
});
fruitsWithColors.sort((a,b) => {
    if (a.color == b.color) {
        return a.name.localeCompare(b.name);
    }
    return a.color.localeCompare(b.color);
})

console.log(fruitsWithColors);