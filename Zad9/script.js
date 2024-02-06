let names = [];

do {
    let name = prompt("Enter name:");
    names.push(name);
} while (confirm("Do you want to enter new name?"));

let filteredNames = names.filter(name => name.length >= 5).sort().join(", ");

console.log("Names with length greater than 5: ", filteredNames);
