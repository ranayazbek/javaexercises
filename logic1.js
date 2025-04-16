
function assignGrade(avg) {
    if (avg >= 90) return 'A';
    else if (avg >= 80) return 'B';
    else if (avg >= 70) return 'C';
    else if (avg >= 60) return 'D';
    else return 'F';
    // time complexity is O(1) for each operation
}

function calculateAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return Math.round(sum / scores.length);
    // time complexity is O(n) where n is the number of scores (length of the array)
}

function generateReports(students) {
    const results = [];
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        const avg = calculateAverage(student.scores);
        results.push({
            name: student.name,
            average: avg,
            grade: assignGrade(avg)
        });
    }
    return results;
    // time complexity is O(n) where n is the number of students (length of the array)
}


const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [70, 68, 72] },
    { name: "Charlie", scores: [100, 100, 100] }
];


const studentResults = generateReports(students);
console.log(studentResults);