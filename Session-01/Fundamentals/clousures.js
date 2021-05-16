// clousure (o que envolve) eh o escopo criado na definicao da funcao (contexto lexico)
// eh o escopo que permite o acesso a variaveis externas a funcao
// a funcao tem memoria do seu local de origem 

const x = "Global" // no meu modulo 

function myFunctionExternal() {
    const x = "Local"

    function myFunctionInternal() {
        return x
    }

    return myFunctionInternal
}

const myFunction = myFunctionExternal()
console.log(myFunction())