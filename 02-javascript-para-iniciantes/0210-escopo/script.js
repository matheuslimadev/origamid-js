/** Escopo
 * Evita conflito de nomes
 * Atenção sempre se lembre que existem os escopos de Funções e de Blocos
 */

function mostrarCarro () {
    var carro = 'Uno'
    console.log(carro)
}
mostrarCarro() // Uno
// console.log(carro) // carro is not defined - porque a variável (mesmo que var) está dentro da função


/* Criar uma variável sem a palavra chave var, let ou const irá gerar uma variável global
* Isso significa que ela poderá ser acessada em qualquer escopo (global)
*/
function showColor () {
    color = 'blue' // Variável sem var, let ou const - ela é global agora
    console.log(color)
}
showColor() // blue 
console.log(color) // blue - O fato disso funcionar é um meio que um erro, porque a variável color está dentro da função, mesmo sendo global - para corrigir use o strict mode: Adicione 'use strict' no início do código

/**
 * Usando strict mode
 */
'use strict'
function showNewCar () {
    newCar = 'Celta' 
    console.log(newCar)
}
showNewCar() // Só vai funcionar caso add a palavra reservada 'let', 'var' ou 'const' antes da variável 'newCar', por conta do 'use strict' 

/**
 * Escopo de Função (Pai)
 * Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções
 */
var serie = 'Two and Half Man'
function showSerie () {
    let resposta = `A série é: "${serie}"`
    console.log(resposta)
}
showSerie()


/**
 * Escopo de bloco
 * Variáveis criadas com 'var' vazam o bloco. Por isso com o ES6 a melhor forma de declarar uma variável é utilizando const e let, pois estas respeitam o escopo de bloco
 */
let oneGod = 'Odim'
if (true) {
    var cpu1 = 'Ryzen 5'
    let cpu2 = 'i5'
    console.log(`Deus da guerra: ${oneGod}`) // Vai funcionar porque o bloco consegue ter acesso à uma variável de escopo pai
    console.log(cpu1)
    console.log(cpu2)
}
console.log(`cpu1: ${cpu1}`)
// console.log(`cpu2: ${cpu2}`) // ReferenceErro: cpu2 is not defined


/**
 * 'var' vaza o bloco mesmo que o que está dentro do bloco não seja executado. Exemplo: uma condição falsa.
 * Isso acontece por conta do hoisting.
 * No exemplo abaixo ela sobe, mas não é atribuído valor, então ela permanece 'undefined'.
 */
if (false) {
    var musico = 'Michael Jackson'
    console.log(`O músico é: ${musico}!`)
}
console.log(musico) //undefined

/**
 * Erro clássico
 */
var i = 50
for (let i = 0; i < 10; i++) {
    console.log(`i = ${i}`)
}
console.log(i) //50 - A variável i está se referindo a 'var i' e não o 'let i', pois o 'let i' só funciona dentro do escopo do for
console.log(i * 10) //500

/**
 * Peculiaridades da 'const'
 * Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código
 * A const dá erro caso seja declarada mas não inicializada
 */ 
const mes = 'Janeiro'
//const mes = 'Fevereiro' //Vai gerar erro, não posso redeclarar a variavel | Erro durante o hosting
//mes = 'Fevereiro' //Vai gerar erro, não posso atribuir novo valor para uma constante. | Erro pós hosting
//const semana //Vai gerar erro, não posso declarar uma constante sem inicializar ela.

const data = {
    dia: '01',
    mes: '01'
}
console.log(data) //{ dia: '01', mes: '01' }
data.dia = '02'
console.log(data) //{ dia: '02', mes: '01' }
data.ano = '2000' // mesmo data sendo uma constante é possível adicionar novas propriedades e métodos nela.
console.log(data) //{ dia: '02', mes: '01', ano: '2000' }
//data = 'Agora sou uma string, e não um objeto' //Vai dar erro, não é possível mudar o tipo do dado da const | Erro pós hosting

/**
 * let
 * Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável
 * É possível declarar e não inicializar
 */
let bairro // Let permite só declarar uma variável sem inicializar ela (diferentemente da const)
//let bairro //Vai dar erro, pois não é permitido redeclarar (usar 'let' antes variavel)
bairro = 'asa 1'
console.log(bairro)
let bairro = 'asa 2' //Vai dar erro, pois não é permitido redeclarar (usar 'let' antes variavel)
