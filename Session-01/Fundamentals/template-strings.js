// A template string example

const name = 'Khalil'

const template = `Olá,
    ${name}!`

console.log(template)

console.log(`1 + 5 = ${1 + 5}!`)

// templates permitem concatenar chamadas de métodos!
const up = text => text.toUpperCase()
console.log(`Ei... ${up('cuidado')}`)