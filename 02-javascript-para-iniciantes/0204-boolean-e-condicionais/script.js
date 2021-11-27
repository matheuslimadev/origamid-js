// Boolean e Condicionais:
var possuiGraduacao = true
var possuiDoutorado = false

// Condicionais com If e Else:
if(possuiGraduacao && possuiDoutorado) {
  // console.log('Possui graduação.')
} else if(possuiDoutorado === false) {
  // console.log('Não tem doutorado')
} else {
  var x = 'Por causa do hosting a variável x "sobe" sendo undefined'
  console.log('Não possui graduação.')
}
// console.log(x)
// O valor dentro dos parânteses sempre será avaliado em false ou true.


// Condicionais com String:
// var nome = 'Teste'
var nome = ''

if(nome) {
  console.log('Nome existe')
} else {
  console.log('Nome não existe')
}
// JS reconhece string vazia com false
// Outros valores falso:
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('')
// O restante retornará truthy


// Operador Lógico de Negação !
// O operador !, nega uma operação booleana. Ou seja, !true é igual a false
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!'') // false
//Dica: Você pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy

// Operadores de Comparação:
// Sempre quando estiver fazendo comparações com esses operadores lógicos o retorno será um valor booleano
10 > 5 // true
5 > 10 // false
20 < 10 // false
10 <= 10 // true
10 >= 11 // false

10 == '10' // true
10 == 10 // true
10 === '10' // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true
'Gato' == 'gato' // false
'Gato' === 'gato' // false 


// Operadores Lógicos &&
// && Compara se uma expressão e a outra é verdadeira
// O primeiro valor false que ele encontrar ele vai retornar ele. Se ele não encontrar nenhum valor falso ele retorna o último valor que foi verdadeiro.
// Importante: Esse operador retorna o último valor verdadeiro e não um booleano true ou false.
true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // Cão - // Os dois valores são verdadeiros ('Gato' && 'Cão'), ele retorna 'Cão' porque esse foi último valor verdadeiro.
(5 - 5) && (5 + 5); // 0 - // Ele retornou 0, porque 0 foi o primeiro valor false que ele encontrou, resultado da expressão (5 - 5).
'Gato' && false; // false 
(5 >= 5) && (3 < 6); // true // Ele cuspiu true, porque o último resultado foi true, ou seja, (3 < 6) retorna um valor booleano do tipo true.
//Importante: Se ambos os valores forem true ele irá retornar o último valor verificado. Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos.

if((5 - 10) && (5 + 5)) {
  console.log('true') // Vai entrar aqui, porque mesmo (5 - 10) retornando -5, o JS entende -5 como true.
} else {
  console.log('falso')
}


// Operadores Lógicos ||
// || Compara se uma expressão ou outra é verdadeira
// o || está sempre em busca do verdadeiro. Ele retorna o primeiro valor true (sendo um booleano, um número inteiro, uma string...).
// Caso ele não encontre nenhum valor true, ele retornará o último valor false
true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // 'Gato'
(5 >= 5) || (3 < 6); // true
false || null; // null

let condicional01 = (5 - 5) || (5 + 5) || (10 - 2)
console.log('condicional 01: ', condicional01) // 10
let condicional02 = (5 - 5) || (5 + 5) && (10 - 2)
console.log('condicional 02: ', condicional02) // 8


// SWITCH:
// Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.
var cor = 'Verde'

switch (cor) {
  case 'Azul':
    console.log('Olhe para o céu')
    break;
  case 'Verde':
    console.log('Olhe para a floresta')
    break;
  default:
    console.log('Feche os olhos')
}
