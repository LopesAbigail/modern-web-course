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

// nesse primeiro exemplo, this vai apontar para Person?
// retorno NaN
// Não aponta para Person, uma vez que a funcao está sendo chamada por um temporizador e ñ o proprio obj Person

// Como resolver?

// bind
/*
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
*/

// self
// driblando a variacao de escopo do this
function Person_self() {
    this.age = 0

    const self = this // refere-se a Person
        // Dispara outra funcao a partir do intervalo definido
        // Recebe uma funcao e um intervalo de tempo (em milissegundos)
        // A cada 1 segundo, essa funcao anonima sera disparada
    setInterval(function() {
            self.age++
                console.log(self.age)
        }, 1000) // o bind amarra o "this" com a funcao
}

new Person_self