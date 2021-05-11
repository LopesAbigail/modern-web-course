const person = {
    greet: "Hallo, Welt!",
    speak() {
        console.log(this.greet)
    }
}

person.speak()
const falar = person.speak
falar()

const peopleSpeak = person.speak.bind(person)
peopleSpeak()