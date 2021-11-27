var idade = 28;
var gols  = 1000;
var pi    = 3.14; // Ponto para decimal
var exp   = 2e10; // 20000000000

// A precisão de números em JS vai até 15 digitos, depois ele arredonda.

var soma = 100 + 50; // 150
var subt = 100 - 50; // 50
var sub = '100' - 50; // 50
var multiplicacao = 10 * 2; // 20
var mult = '100' * 2; // 200
var divisao = 100 / 2; // 50

var div = 'Comprei 10' / 2; // NaN (Not a Number)
// Função para verificar se um valor Não é Número: isNaN() - Retorno true or false

var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4 - Ou seja, 4 é o Resto da Divisão de 14 divido por 5
// Dica: para saber se um número é par basta verificar se o resto da divisão do number % 2 é igual à 0, se for 0 o number é par, se for 1 o number é ímpar.

//Lembrando que + em String vai haver uma concatenação
var a = 1 + '1'


// A Ordem importa:
// Começa por multiplicação e divisão, depois por soma e subtração.
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

// Operadores Unários:
var incremento = 5;
//console.log(incremento++); // 5
//console.log(++incremento); // 7 

var descremento = 5;
//console.log(descremento--); // 5
//console.log(descremento); // 4

var frase = 'Isso é um teste';
+frase // NaN
-frase // NaN

let numero = '10';
+numero; // 10 - Número positivo
-numero; // 10 - Número negativo

// console.log(numero)

// EXERCÍCIO
// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; // Resposta: 35

// Crie duas expressões que retornem NaN
var expressao1 = 'Um' * 2; //Nan
var expressao2 = 100 / 'Dois'; //NaN

// Somar a string '200' com o número 50 e retornar 250
var numString = '200';
var somaLoka = +numString + 50;
console.log(somaLoka);

// Incremente o número 5 e retorne o seu valor incrementado
var pequeno = 5
pequeno++;
console.log(pequeno)

// Como dividir o peso por 2?
var numero2 = '80';
var unidade = 'kg';
var peso = numero2 + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

var pesoPorDois = numero2 / 2 + unidade // Resposta
console.log(pesoPorDois)















