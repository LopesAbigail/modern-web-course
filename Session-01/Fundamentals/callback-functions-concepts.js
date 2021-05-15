// observer -> Event Handler (JS) and Listener (Java)

const grades = [7.7, 6.5, 5.6, 9.8, 7.1, 8.3, 6.4, 7]

// without callback
const lowGrades = []
for (let i in grades) {
    if (grades[i] < 7) {
        lowGrades.push(grades[i])
    }
}

console.log(lowGrades)

// with callback (filter)
const highGrades = grades.filter(function(grade) {
        return grade >= 7
    }) // make changes only in highGrades

console.log(highGrades)

const gradesLowerThan7 = grade => grade < 7
const highGradesArrow = grades.filter(gradesLowerThan7) // abordagem funcional
console.log(highGradesArrow)