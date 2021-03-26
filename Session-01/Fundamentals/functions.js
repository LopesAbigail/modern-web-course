// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)
imprimirSoma()

// Funcao com retorno
// valor padrao de b eh 1
function somar(a, b = 1) {
    return a + b
}

console.log(somar(2, 3))
console.log(somar(2))
console.log(somar())