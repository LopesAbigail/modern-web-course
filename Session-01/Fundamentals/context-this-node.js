// com function comum
let compareWithThis = function(myParam) {
    console.log("Comum ", this === myParam)
}

compareWithThis(global) // global está no contexto do Node.js, logo o retorno eh "true" (no navegador Chrome, o contexto global corresponde a 'window')

const obj = {}
compareWithThis = compareWithThis.bind(obj) // obj eh a nova referencia de 'this' para a minha funcao
compareWithThis(global)
compareWithThis(obj)

// com arrow function
let compareWithThisArrow = myParam => console.log("Arrow: ", this === myParam) // this aponta para o módulo atual, para o arquivo em que a funcao foi definida

compareWithThisArrow(global) // global está no contexto do Node.js, logo o retorno eh "true" (no navegador Chrome, o contexto global corresponde a 'window')
compareWithThisArrow(module.exports) // modulo atual -> module.exports = this

// bind e arrow
const otherObj = {}
compareWithThisArrow = compareWithThisArrow.bind(otherObj) // this continua apontando para o modulo -> eh mais forte que o bind rs
compareWithThisArrow(otherObj) // false
compareWithThisArrow(global) // false
compareWithThisArrow(module.exports) // true