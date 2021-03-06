// Arquivo de experimentação dos conceitos básicos de JavaScript

// Como é organizado, da forma mais basilar possível
// Baseado em conceitos de linguagem C
// Setenças de código -> estruturas de código

console.log("Sentença de código")

console.log("============")

{
    {
        console.log("Hallo, Welt!")
        console.log('Holla, que tal?')
        console.log('Merci, beaucoup.')
    }
}

console.log("============")

/*
    Esse é um bloco de comentários
    This is a comment block
    Dies ist ein Kommentarblock
*/

/*
    ECMA Script
    var 
    let
    const
*/

var example_var = 3 // Pode ser redeclarada dentro de um mesmo escopo
let example_let = 3 // Não pode ser redeclarada dentro de um mesmo escopo
const example_const = 4 // Não pode ter sua atribuição alterada -> constante (como o nome já diz...)

/* Tipagem fraca, dinâmica
    Trade-offs:
        pros: flexível
        cons: dificulta a detecção de determinados tipos de erros 
*/

let ding = 'uhuu'
console.log(ding)
console.log(typeof(ding))
console.log("============")
ding = 8
console.log(ding)
console.log(typeof(ding))