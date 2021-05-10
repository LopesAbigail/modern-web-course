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

// Params, arguments (intern array)
function subtraction() {
    let subtraction = 0
    for (i in arguments) {
        subtraction -= arguments[i]
    }
    return subtraction
}

console.log(subtraction(4, 9, 2, 1, 7, 4, 3, 2, 1.32))

// Default param
// Before ECMA Script 2015
// it doesn't work with zeros :(
function sumDefaultParam_before(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}
console.log(sumDefaultParam_before())
console.log(sumDefaultParam_before(4, 5))

function sumDefaultParam_before_other_examples(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // the most secure

    return a + b + c
}

// after
function sumDefaultParam_after(a = 1, b = 1, c = 1) {
    return a + b + c
}