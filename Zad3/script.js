let employees = [];

do {
    let name = prompt("Enter employee name: ");
    let surname = prompt("Enter employee last name: ");
    let profession = prompt("Enter employee profession: ");
    let salary;
    do {
        salary = Math.abs(Number(prompt("Enter employee salary: ")));
    } while (isNaN(salary) || salary === 0);

    employees.push({ name, surname, profession, salary });
} while (confirm("Do you want to enter new employee?"));

let professionArray = {};
let totalSalary = 0;

employees.forEach(({ profession, salary }) => {
    if (!professionArray[profession]) {
        professionArray[profession] = { totalProfessionSalary: 0, salaryPercentage: 0, professionEmployees: [] };
    }
    professionArray[profession].totalProfessionSalary += salary;
    totalSalary += salary;
});

for (const { profession, name, surname, salary } of employees) {
    professionArray[profession].salaryPercentage += (salary / totalSalary).toFixed(2) * 100;
    professionArray[profession].professionEmployees.push({ name, surname, employeePercentage: (salary / professionArray[profession].totalProfessionSalary).toFixed(2) * 100 });
}

console.log("Profession Array:", professionArray);
