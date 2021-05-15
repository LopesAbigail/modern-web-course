const sum = function(x, y) {
    return x + y
}

const printResult = function(a, b, operation = sum) {
    console.log(operation(a, b))
}

printResult(5, 6)
printResult(2, 6, function(x, y) {
    return x ** y //power
})
printResult(3, 4, (x, y) => x - y) // arrow eh sempre anonima