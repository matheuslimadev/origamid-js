// Variáveis podem iniciar com var, let ou const
// O início de uma variável pode ser: $, _ ou letras. Podem ter números mas não pode iniciar com números.
// Não use no nome das variáveis palavras reservadas: https://www.w3schools.com/js/js_reserved.asp

var nome = 'Matheus'
var idade = 26
var possuiFaculdade = true

// Declarando múltiplas variáveis com vírgula:
var city = 'Goiânia', 
    state = 'GO', 
    country = 'BR'

console.log('var nome = ', nome)
console.log('var idade = ', idade)
console.log('var possui faculdade = ', possuiFaculdade)
console.log(city, ', ', state, ', ', country)

//Variável sem definição:
var varSemValor
console.log(varSemValor) //Resultado vai ser 'undefined'
console.log(varDefinicao) //Resultado vai ser um erro 'varDefinicao is not defined' 

/* EXERCÍCIO: */

// Declarar uma variável com o seu nome
const name = 'Matheus'
// Declarar uma variável com a sua idade
const age = 26
// Declarar uma variável com a sua comida
// favorita e não atribuir valor
var favoriteFood
// Atribuir valor a sua comida favorita
favoriteFood = 'Hamburguer'
// Declarar 5 variáveis diferentes sem valores
var var0
var var1
var var2
var var3
var var4
