/*
function Person() {
    this.age = 0

    // Dispara outra funcao a partir do intervalo definido
    // Recebe uma funcao e um intervalo de tempo (em milissegundos)
    // A cada 1 segundo, essa funcao anonima sera disparada
    setInterval(function() {
        this.age++
            console.log(this.age)
    }, 1000)
}

new Person
*/

// this vai apontar para Person?
// retorno NaN
// Não aponta para Person, uma vez que a funcao está sendo chamada por um temporizador e ñ o proprio obj Person

// Como resolver?
function Person_new() {
    this.age = 0

    // Dispara outra funcao a partir do intervalo definido
    // Recebe uma funcao e um intervalo de tempo (em milissegundos)
    // A cada 1 segundo, essa funcao anonima sera disparada
    setInterval(function() {
            this.age++
                console.log(this.age)
        }.bind(this), 1000) // o bind amarra o "this" com a funcao
}

new Person_new