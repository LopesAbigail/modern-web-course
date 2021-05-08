function shopping(work1, work2) {
    const buyIceCream = work1 || work2
    const buyTV50 = work1 && work2
    const buyTV32_bitwise = !!(work1 ^ work2) // bitwise xor: different arguments
    const buyTV32 = work1 != work2
    const keepHelthy = !buyIceCream

    return { buyIceCream, buyTV50, buyTV32_bitwise, buyTV32, keepHelthy }
    // in ECMAScript 2015, this is the same as:
    // return { 
    //     buyIceCream: buyIceCream,
    //     buyTV50: buyTV50,
    //     buyTV32_bitwise: buyTV32_bitwise, 
    //     buyTV32: buyTV32,
    //     keepHelthy: keepHelthy 
    // }
}