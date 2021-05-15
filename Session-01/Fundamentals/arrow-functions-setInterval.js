function Person() {
    this.age = 0

    setInterval(() => {
        this.age++ // this no contexto lexico de Person
            console.log(this.age)
    }, 1000)
}

new Person