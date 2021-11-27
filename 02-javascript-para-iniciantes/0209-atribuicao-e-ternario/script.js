/* Atribuição e Ternário */
var numero = 20
numero = numero + 10 
console.log(numero) // 30
numero += 5 // É o mesmo que numero = numero + 5
console.log(numero) // 35 

var numero2 = 10
var numero3 = 2
numero2 /= numero3 // É o mesmo que numero2 / numero 3
console.log(numero2) // 5


/* TERNÁRIO */
var idade = 19
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber'
console.log(podeBeber) // 'Pode beber'
// condição ? true : false
// Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição.
