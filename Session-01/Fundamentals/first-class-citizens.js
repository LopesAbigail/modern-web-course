// literal
function myFunction() {} // return undefined

// with var
const varFunction = function() {}

// with array
const array = [function(a, b) { return a + b }, "func1", "func2"]
console.log("Array:", array[0](2, 4))

// with objects
const obj = {}
obj.sing = function() { return 'Eh preciso amar as pessoas como se não houvesse amanhã...' }
console.log(obj.sing())

// with other function
function run(myFunction) {
    myFunction()
}

function doSum(a, b) {
    return function doOtherSum(c) {
        console.log(a + b + c)
    }
}

doSum(1, 3)(4)