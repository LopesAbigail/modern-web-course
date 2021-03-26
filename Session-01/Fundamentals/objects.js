// colecao de chave e valor
const prod1 = {}
prod1.nome = 'Celular Ultra Mega' // criacao dinamica
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

const prod3 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    fornecedor: {
        nome: "Examplelina",
        endereco: "Rua da Lua"
    }
}

console.log(prod2)
console.log(prod3)

// json != object