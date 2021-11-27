/* TUDO É OBJETO */
// Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.

/* strings */
var nome = 'Matheus'
nome.length // 7
nome.charAt(1) // 'a'
nome.replace('h', '') // 'Mateus'
nome.length // 7
nome.toLowerCase() // 'matheus'
nome // 'Matheus'
// Lembrando que esses métodos não alteram o valor na variável, e sim estão apenas retornando um novo valor, sem modificar o original.
// Uma string herda propriedades e métodos do construtor String()


/* numbers */
var altura = 1.8
altura.toString() // '1.8'
altura.toFixed() // '2'
// Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos

// Funções também tem métodos e propriedades:
function r1 () {
  return 123
}
r1().toString() // '123'

// Mostrar total de argumentos de uma função:
function armas (param1, param2) {
  return `Armas: ${param1} e ${param2}`
}
armas.length // 2 - Total de paramêtros (param1, param2) da função
addEventListener.length // 2


/* Elementos do DOM */
var btn = document.querySelector('.btn') // Selecionando uma tag do DOM
console.log(btn) 
btn.addEventListener('click', () => { // Adicionando um evento quando há uma interação com essa tag selecionada
  alert(1)
})
console.log(btn.classList) // ["btn", "btn_dark", value: "btn btn_dark"] .classList é uma propriedade da tag (btn) que mostra as classes.
btn.classList.add('ativo') // Adiciona a classe 'ativo' na tag btn
console.log(btn.classList) // ["btn", "btn_dark", "ativo", value: "btn btn_dark ativo"]
console.log(btn.innerText) // 'Clique Me' - a propriedade .innerText retornar o texto que está dentro da tag (btn)


/* Objetos Revolucionaram a Programação */
/* Web API's são métodos e propriedades que permitem a interação JavaScript e Browser */