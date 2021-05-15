// observer pattern -> event
const manufacturers = ["Mercedez", "Audi", "BMW"]

function print(name, index) {
    console.log(`${ index + 1}. ${name}`)
}

manufacturers.forEach(print)
manufacturers.forEach(manufacturer => console.log(manufacturer)) // para cada elemento de manufacturers, chama a arrow, passando o manufacturer atual como parametro