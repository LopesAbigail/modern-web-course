// Vetores heterogeneos
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // undefined

valores[4] = 10
console.log(valores) // add index 4
console.log(valores.length)

valores.push({ id: 3 }, false, null, 'teste') // array beem heterogeneo --> eh melhor trabalhar com homogeneos, tem-se um codigo mais organizado
console.log(valores)

console.log(valores.pop()) // elimina o ultimo item do array e retorna esse valor
console.log(valores)
delete valores[0] // retira elemento, deixando-o vazio
console.log(valores)

console.log(typeof valores)