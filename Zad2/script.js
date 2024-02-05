
const employees = [];

do {
    let name = prompt("Enter employee name: ");
    let surname = prompt("Enter employee last name: ");
    let profession = prompt("Enter employee profession: ");
    let salary;
    do {
        salary = Math.abs(Number(prompt("Enter employee salary: ")));
    } while (isNaN(salary) || salary === 0);

    employees.push({ name, surname, profession, salary });
}while(confirm("Do you want to enter new employee?"));

const professionStats = {};

for (const { profession, salary } of employees) {
    professionStats[profession] = professionStats[profession] || { totalSalary: 0, count: 0 };
    professionStats[profession].count++;
    professionStats[profession].totalSalary += salary;
}

const sortedProfessions = Object.entries(professionStats)
    .map(([profession, { totalSalary, count }]) => ({ profession, average: totalSalary / count, count }))
    .sort((a, b) => a.average - b.average);

console.log("Employees: ", employees);
console.log("Profession Statistics:");
sortedProfessions.forEach(({ profession, average, count }) => {
    console.log(`Profession: ${profession}, Average Salary: ${average.toFixed(2)}, Employees: ${count}`);
});
