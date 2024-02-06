let athletes = [];

/* athletes = [
    { name: "John", surname: "Doe", points: 100 },
    { name: "Jane", surname: "Smith", points: 90 },
    { name: "Alice", surname: "Johnson", points: 40 },
    { name: "Bob", surname: "Williams", points: 20 }
]; */

do {
    let name = prompt("Enter athlete name:");
    let surname = prompt("Enter athlete last name:");
    let points;
    do {
        points = Number(prompt("Enter athlete points:"));
    } while (isNaN(points) || points === 0);

    athletes.push({ name, surname, points });
} while (confirm("Do you want to enter new athlete?"));

const maxPointsAthlete = athletes.reduce((max, current) => {
    return current.points > max.points ? current : max;
}, athletes[0]);

const athletesByCategory = {
    bad: athletes.filter(athlete => athlete.points <= maxPointsAthlete.points * 0.25).sort((a, b) => a.surname.localeCompare(b.surname)),
    ok: athletes.filter(athlete => athlete.points > maxPointsAthlete.points * 0.25 && athlete.points <= maxPointsAthlete.points * 0.5).sort((a, b) => a.surname.localeCompare(b.surname)),
    good: athletes.filter(athlete => athlete.points > maxPointsAthlete.points * 0.5 && athlete.points <= maxPointsAthlete.points * 0.75).sort((a, b) => a.surname.localeCompare(b.surname)),
    great: athletes.filter(athlete => athlete.points > maxPointsAthlete.points * 0.75).sort((a, b) => a.surname.localeCompare(b.surname))
};

for (const category in athletesByCategory) {
    console.log(`\nCategory ${category}:`);
    athletesByCategory[category].forEach(athlete => {
        console.log(`${athlete.surname} ${athlete.name}`);
    });
}
