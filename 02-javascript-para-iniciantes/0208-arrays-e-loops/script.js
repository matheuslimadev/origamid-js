/* Arrays */
// É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável
var videoGames = ['Switch', 'PS4', 'XBox']
videoGames[0] // 'Switch'
videoGames[2] // 'XBox'
// Acesse um elemento do array utilizando [n]
// Arrays são base 0, ou seja, a primeira posição (index) vai ser 0, o segundo vai ser 1 e por aí vai.

// Métodos e Propriedades de um Array:
var ultimoItem = videoGames.pop() // 'Xbox' - array.pop() Remove o último item('XBox') do array (videoGames) e retornar ele. 
// Importante: ele modifica o valor original do array em que o método foi aplicado.

videoGames.push('3DS') // 3 - Além de adicionar um item no final do Array, ele retorna o tamanho do array. Semelhante ao array.length

videoGames.length // 3 - Quantidade de itens do array.

// Existem diversos outros métodos, como 'map', 'reduce', 'forEach' e mais que veremos mais à frente 

// For Loop:
// O for loop possui 3 partes: Início; Condição incremento
for (var incremento = 0; incremento < 10; ++incremento) {
  // console.log(incremento)
}

// While
var i = 0 // Início
while (i < 10) { // Condição
  // console.log('while: ', i)
  i++ // Incremento
}

// For com Arrays
var times = ['Palmeiras', 'Flamengo', 'Goiás', 'Coritiba']
for (i = 0; i < times.length; i++) {
  // console.log(`Time: ${times[i]}`)
}

// For com 'break':
var esportes = ['futebol', 'basket', 'natação', 'hipismo']
for (var n = 0; n < esportes.length; n++) {
  // break -> se descomentado nada acontece dentro desse for, ele já chega quebrando!
  if(esportes[n] === 'natação') {
    break
  }
  // console.log(`Esporte escolhido: ${esportes[n]}`)
}

// Usando array.forEach()
var cores = ['azul', 'preto', 'branco', 'vermelho', 'amarelo']
cores.forEach(function(item, index, arrayCompleto) {
  console.log(index, item)
  console.log(arrayCompleto)
})

// Não se confunda com a sintaxe do for (clássico):
var valorMaximo = 5
var valorMinimo = 0
for (;valorMinimo < valorMaximo;) {
  console.log('for feio')
  valorMinimo++
}
// O código acima vai funcionar normalmente, porque o único parametro que for realmente precisa para funcionar é a condição usando ; no início e final da condição;
// Mas este não é o melhor jeito de usar o for.