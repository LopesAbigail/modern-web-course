// funcao curta, com sintaxe mais reduzida
// ha um 'this' associado ao contexto no qual ela é escrita
// sempre anonima -> o que significa que, ao ser chamada, deve ser armazenada em uma constante
let double = function a(x) { return 2 * x }

double = (a) => {
    return 2 * a
}

double_2 = a => 2 * a // retorno implicito -> funcoes especificas e reutilizaveis

hallo = () => "Hallo" // sem parametros
hallo = _ => "Hallo" // possui parametro, mas ñ eh obrigatorio que o passemos