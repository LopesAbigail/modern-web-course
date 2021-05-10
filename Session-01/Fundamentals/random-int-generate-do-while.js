function getRandomInt(min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = 0

do {
    option = getRandomInt(-1, 10)
    console.log(`The chosed option was ${option} `)
} while (option != -1)

console.log("See ya")