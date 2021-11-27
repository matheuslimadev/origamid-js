/* OBJETOS */
// Definição: Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
var pessoa = {
  nome: 'André',
  idade: 28,
  profissao: 'Designer',
  possuiFaculdade: true
}
pessoa.nome // 'André'
pessoa.possuiFaculdade // true
// console.log(pessoa)
// Propriedades e métodos consistem em nome (chave) e valor.


/* MÉTODOS */
// É uma propriedade que possui uma função no local do seu valor.
var quadrado = {
  lados: 4,
  area: function (lado) { // <- Maneira tradicional de criar um método dentro do objeto.
    return lado * 4
  },
  areaNova(lado) { // <- Jeito novo de criar um método dentro do objeto.
    return lado * 4
  },
  perimetro: function (lado) {
    // console.log(`This é: `, this)
    return this.lados * lado
  }, 
  cinco () {
    return 5
  }
}
quadrado.lados // 4
quadrado.area(5) // 20
quadrado.perimetro(2) // 8


/* Organizar o Código */
// Objetos servem para organizar o código em pequenas partes
Math.PI // 3.141592653589793
Math.PI.toFixed(2) // 3.14
Math.random() // number aleatório

var pi = Math.PI
// console.log(pi) //  3.141592653589793
// 'Math' é um objeto nativo de JS.
// Já percebeu que console é um objeto e .log() um método?


// Atribuir variável a retornos do objeto:
var menu = {
  width: 800,
  height: 500,
  background: '#84E'
}

var bg = menu.background
// console.log(bg) // '#84E'

// Alterando valor do objeto
menu.background = '#000'
// console.log(menu.background) // '#000'

// Adicionando novas propriedades ao objeto (menu)
menu.color = 'blue'

// Adicionando novos métodos ao objeto (menu)
menu.esconder = function () {
  return 'escondi'
}
// console.log(menu.esconder()) // 'escondi'

// Atribuindo uma função a uma variável e depois adicionadno essa variável como método de um objeto
var achar = function () {
  return 'achei'
}
menu.encontrar = achar

/* Comando novo: console.table(menu)  <- Irá mostrar uma tabela do objeto menu. */


/* This */
// this irá fazer uma referência ao próprio objeto.
var altura = 120;
var novosDados = {
  peso: 100,
  altura: 100,
  metadeAltura() {
    return this.altura / 2  // 50 - Porque o this.altura está fazendo referência a altura do objeto (this) 'novosDados'.altura = this.altura
  },
  metadeAlturaVar() {
    return altura / 2  // 60 - Porque como não tem this.altura, ele está reconhecendo a variável que foi declada antes do objeto (linha: 77)
  }
}
// this irá retornar o próprio objeto.


/* Função nativa do JS: Object */
// Todo objeto criado com JS é herdado da função Object, por isso ele herda certas propriedades e métodos
var texto = {
  palavras: 5000
}
texto.hasOwnProperty('palavras') // true - O método '.hasOwnProperty' é herdado da função 'Object', nativa do JS.
texto.hasOwnProperty('frases') // false
texto.hasOwnProperty('hasOwnProperty') // false - Apesar dele ter sim a propriedade, que é um método, 'hasOwnProperty', ela foi herdada, por isso ele retorna false.

let minhaString = 'Texto Qualquer' // Essa própria string possui propriedades e métodos dela. Vá no console do Chrome e digite 'minhaString.' e veja as sugestões.