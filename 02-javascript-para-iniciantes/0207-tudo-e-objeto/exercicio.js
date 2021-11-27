/* Exercício */

// nomeie 3 propriedades ou métodos de strings
var meuNome = "Matheus";
var sobreNome = "Alves";
meuNome.length // 7
meuNome.replace('Ma', 'Fala') // 'Falatheus'
meuNome.concat(` ${sobreNome}`) // 'Matheus Alves'

// nomeie 5 propriedades ou métodos de elementos do DOM
var link = document.querySelector('.link_css')
console.log(link)
link.id // "" (string vazia) - Porque na tag (link) não tem id
link.addEventListener('click', () => (alert('Cliquei')) ) // Quando a tag receber o click será executado o callback (função anônima), resultando em um alert('Cliquei')
link.href // 'http://google.com'
link.hostname // 'google.com'
link.click() // Será redirecionado para o link que está setado no href da tag (link)
link.target // '_blank' - É o valor que está setado no atributo 'target' da tag html (link)
link.text // 'Clique me here' - Retornar o texto que está dentro da tag (link)

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
// Resposta 1: https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
// Resposta 2: https://clipboardjs.com/