// A referenciacao eh diferente para tipos primitivos
// Quando se trata de objetos, referencia-se o endereco de memoria
// Ja quando se fala em tipos primitivos, a referencia é o proprio valor 

let valor // não inicializada
console.log(valor) // undefined
    //console.log(valor2) // valor nao definido, declarado

valor = null // ausência de valor
console.log(valor)
    // console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco) // nao ha um preco definido
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
    // delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)