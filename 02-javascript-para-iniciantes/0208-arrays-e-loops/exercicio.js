/* EXERCÍCIO */

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var copasBrasil = [1959, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
copasBrasil.forEach(ano => {
  console.log(`O brasil ganhou a copa de ${ano}`)
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (let i = 0; i < frutas.length; i++) {
  if(frutas[i] === 'Pera') {
    break
  }
  console.log(`Fruta: ${frutas[i]}`)
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1]
console.log(`A última fruta é: ${ultimaFruta}`)