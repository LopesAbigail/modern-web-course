// introducao ao paradigma OO

function Car(maxVelocity = 200, delta = 5) {
    // private atribute
    let currentVelocity = 0

    // public method
    this.accelerate = function() {
        if (currentVelocity + delta <= maxVelocity) {
            currentVelocity += delta
        } else {
            currentVelocity = maxVelocity
        }
    }

    // public method
    this.getCurrentVelocity = function() {
        return currentVelocity
    }

}

const uno = new Car
uno.accelerate()
console.log(uno.getCurrentVelocity())

const ferrari = new Car(450, 20)
ferrari.accelerate()
console.log(ferrari.getCurrentVelocity())