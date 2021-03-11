const escuela = "Hochschule"

console.log(escuela.charAt(4)) // print s
console.log(escuela.charAt(12)) // print null
console.log(escuela.charCodeAt(4)) // busca unicode: s = 115
console.log(escuela.indexOf("h")) // retorna a posição da primeira ocorrência: 3
console.log(escuela.substring(1)) // ideia: exiba a subtring a partir do índice 1: ochschule
console.log(escuela.substring(0, 3)) // ideia: vá do índice 0 e me retorne 3 caracteres: Hoc

console.log('Escola '.concat(escuela).concat("!")) // Concatenando
console.log('Escola ' + escuela + "!") // Concatenando

console.log(escuela.replace("c", "k")) // substitui a primeira ocorrência: Hokhschule
console.log(escuela.replace(/\h/g, 'l')) // regex: substitui tudo o que for h por l: Hoclsclule
console.log(escuela.replace(/\w/g, 'S2')) // regex: substitui tudo por S2

// Array
console.log('Weida,Acza,Slov,Katara,Sekani,Khalil'.split(','))
console.log('Weida,Acza,Slov,Katara,Sekani,Khalil'.split(/,/)) // regex
console.log('Weida,Acza,Slov,Katara,Sekani,Khalil'.split(/./)) // "esvazia" a lista