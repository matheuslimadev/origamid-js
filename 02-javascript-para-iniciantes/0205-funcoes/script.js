// FUNÇÕES
// Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.

function areaQuadrada(lado) {
  return lado * lado
}

areaQuadrada(5) // 25
areaQuadrada(4) // 16
areaQuadrada(2) // 4

// console.log(areaQuadrada(10))

function pi() {
  return 3.14
}

var total = 10 * pi() // <- retorno da função pi() vai ser 3.14 - Significa que está 10 * 3.14
//console.log(`Total: ${total}`)


// Parâmetros e Argumentos:
// Ao criar uma função, você pode definir parâmetros.
// Ao executar uma função, você pode passar argumentos.

// 'peso' e 'altura' são os parâmetros da função
// As funções podem ou não retornar um valor, mas IMPORTANTE: As funções só retornam um valor, ele não vai ter vários return executados ao mesmo tempo, o primeiro return ela faz e ignora o que estiver abaixo.
function imc (peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

imc(64, 1.81) // '64' e '1.81' são os argumentos
// console.log(imc(64, 1.81))

// Função cor favorita:
function corFavorita(cor) {
  if(cor === 'Azul') {
    return 'frase do Azul'
  } else if(cor === 'Vermelho') {
    return 'frase do Vermelho'
  } else {
    return 'frase de nenhuma cor'
  }
}

// console.log(corFavorita('Azul'))



// Argumentos podem ser funções:
// Chamadas de Callback, geralmente são funções que ocorrem, após algum evento.
// addEventListener() - É uma função do Browser, nativa do JS.
addEventListener('click', function () {
  console.log('Clicou')
})
// A função 'addEventListener(param1, param2)' possui dois parâmetros;
// No primeiro parâmetro foi passado o argumento 'click' (string);
// No segundo parâmetro foi passado o argumento: função anônima;
// Tipos de Função anônima (funções que não tem nome definido):
// function () {}
// () => {}


function exibeConsole () {
  console.log('exibeConsole')
}

addEventListener('click', exibeConsole) // <-- Quando passado o nome de uma função, não é necessário passar com (), ao invés de exibeConsole(), use apenas: exibeConsole



mostraConsole = param => {
  console.log('Mostrando no Console ', param)
}

// mostraConsole(100)

mostra2 = () => {
  console.log(2)
}

// mostra2()

// Função pode ou não retornar um valor, mas se ela retorna, ela retorna apenas um valor também. Quando não definimos um valor a ser retornado, ela sempre vai retornar undefined. Ainda assim o código interno será executado.
function name () {
  console.log('matheus') // Vai colocar no log a string 'matheus'
                        // Por não ter nenhum retorno na função, o retorno será automáticamente undefined.
} 
//console.log(name()) // vai retornar 'matheus' e também undefined

/* Valores retornados: */
// Uma função pode retornar qualquer tipo de de dado e até outras funções <<
function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Informe a sua idade';
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
  console.log('testando') // Esse log nunca vai acontecer porque o uma vez que é executado o return tudo que está abaixo dele (return) não é executado.
}
// Cuidado: retornar diferentes tipos de dados na mesma função não é uma boa idéia.

/* ESCOPO */
// Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.
// var totalPaises = 193 // Comentei de propósito para gerar o erro abaixo, caso não estivesse comentado eu não precisaria definicar a variável dentro da função e não daria erro no cosole.log() da linha 114.
function paisesVisitados(paisesVisitados) {
  var totalPaises = 193
  return `Ainda faltam ${totalPaises - paisesVisitados} países para você visitar!`
}
//console.log(`total de países: ${totalPaises}`) // vai gerar erro ('totalPaises is not defined'), porque a variável totalPaises está definida apenas dentro do escopo da função paisesVisitados(param)



/* ESCOPO LÉXICO */
// Funções conseguem acessar variáveis que foram criadas no contexto pai.
var profissao = 'Programador'
function dados() {
  var nome = 'Diego'
  var idade = 25
  function outrosDados() {
    var endereco = 'Rua 3, 684'
    var idade = 35
    return `${nome}, ${idade}, ${endereco}, ${profissao}`
  }
  return outrosDados()
}
console.log(dados()) // Retorno 'Diego, 35, Rua 3, 684, Programador'
//console.log(outrosDados()) // Erro proposital: 'outrosDados is not defined'


/* HOISTING: (Funciona para Variáveis e também para Funções)*/
// Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória
console.log(imc(80, 1.80))
function imc(peso, altura) {
  return peso / (altura ** 2);
}