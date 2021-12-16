// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 20
var idadePai = 45
if (minhaIdade > idadePai) {
  console.log('É Maior')
} else if (minhaIdade === idadePai) {
  console.log('É igual')
} else {
  console.log('É menor')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
// Resposta: 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // resposta: true
var idade = 28; // resposta: true
var possuiDoutorado = false; // resposta: false
var empregoFuturo; // resposta: false
var dinheiroNaConta = 0; // resposta: false

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

// O que irá aparecer no console? Resposta: 'Falso'
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console? Resposta: 'Cão'
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

// If Abreviado:
// Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código:
var possuiFaculdade = true
if(possuiFaculdade) 
  console.log('Possui faculdade')
  // console.log('Possui 2') // <- Se descomentado gera um erro, porque é esperado um else ao invés de outra linha de código
else
  console.log('Não possui faculdade')