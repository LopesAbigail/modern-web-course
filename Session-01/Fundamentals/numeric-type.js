// Média ponderada
const peso1 = 2.0
const peso2 = Number('3.0')

console.log(peso1, peso2)

// Métodos do Number
console.log(Number.isInteger(peso2))
console.log(Number.isInteger(peso1))

console.log("============")

const avaliacao1 = 9.857
const avaliacao2 = 5.854

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)

// Altera quantidade de casas decimais
console.log(media.toFixed(2))

// Converte o ponto flutuante em binário
console.log(media.toString(2))

console.log("media is a", typeof media)
console.log("Number is a", typeof Number)

console.log("============")

// Coisas estranhas do JS
// Tipo: infinito
console.log(10 / 0)

// Mas... não era pra ser uma string?
// Não! Ele reconhece como um número!
console.log("10" / 3)

// Não é 0.6
console.log(0.1 + 0.5)

// Posso usar o número literal!
console.log((0.5632).toFixed(2))