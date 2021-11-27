var name = 'Matheus' //console.log(typeof name) -> saída: 'string'
var age = 20 //console.log(typeof age)          -> saída: 'number'
var indefinida //console.log(typeof indefinida) -> saída: 'undefined'
var nulo = null //console.log(typeof nulo)      -> saída: 'object'  | É um bug do JS
var simb = Symbol() //console.log(typeof simb)  -> saída: 'symbol'

// Concatenando String:
var lastName = 'Da Silva'
var completeName = name + ' ' + lastName
console.log(completeName)

// Concatenando String com Number:
var gols = 1000
var jogador = 'Romário'
var frase = jogador + ' fez ' + gols + ' gols.'
console.log(frase)

//Somando números (na verdade vai concatenar)
/* 
  Operações com variáveis do tipo Integer e String só funcionam caso seja operações de subtração, multiplicação ou divisão
*/
var ano = '10'
var numero = 2
var total = ano + numero
console.log('O total foi: ', total)

// Template string:
/*
  Dentro de ${} é possível passar expressões (variáveis, somar, multiplicar...)
*/
jogador = 'Pelé' //sobreescrevendo variável declarada e atribuída valor anteriormente (linha: 14) 
var frase2 = `${jogador} fez ${gols * 2} gols`
console.log(frase2)


/* EXERCÍCIO: */
// Declare uma variável contendo uma string
var umaString = 'Essa é uma string'

// Declare uma variável contendo um número dentro de uma string
var numeroString = '10'

// Declare uma variável com a sua idade
var myAge = 18

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nome1 = 'Donald'
var nome2 = 'Pato'
var completeName = `${nome1} ${nome2}`

// Coloque a seguinte frase em uma variável: It's time
var newPhrase = "It's time"

// Verifique o tipo da variável que contém o seu nome
console.log('Tipo do meu nome é: ', typeof completeName)