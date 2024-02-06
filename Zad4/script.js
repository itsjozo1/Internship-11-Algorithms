let fruits = [];

do {
    let name = prompt("Enter fruit name: ");
    let color = prompt("Enter fruit color: ");
    let kcal;
    do {
        kcal = Number(prompt("Enter fruit calories: "));
    } while (isNaN(kcal) || kcal === 0);


    fruits.push({name, color, kcal});
} while (confirm("Do you want to enter new fruit?"));

/* fruits = [
    { name: "Apple", color: "Red", calories: 52 },
    { name: "Banana", color: "Yellow", calories: 89 },
    { name: "Grape", color: "Purple", calories: 69 },
    { name: "Orange", color: "Orange", calories: 62 },
    { name: "Strawberry", color: "Red", calories: 32 },
    { name: "Kiwi", color: "Green", calories: 61 },
    { name: "Blueberry", color: "Blue", calories: 57 }
]; */

const fruitsByColor = fruits.reduce((acc, fruit) => {
    const { color, name, kcal } = fruit;
    acc[color] = acc[color] || { totalCalories: 0, fruits: [] };
    acc[color].totalCalories += kcal;
    acc[color].fruits.push(name);
    return acc;
}, {});

for (const color of Object.keys(fruitsByColor).sort()) {
    console.log(`Color: ${color}, Fruits: ${fruitsByColor[color].fruits.join(", ")}, Total Calories: ${fruitsByColor[color].totalCalories}`);
}

