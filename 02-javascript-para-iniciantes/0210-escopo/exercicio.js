// Por qual motivo o código abaixo retona erro:
{
  var   cor     = 'preto'
  const marca   = 'Fiat'
  let   portas  =  4
  //console.log(cor) //solução
}
//console.log(var, marca, portas) // var é uma palavra reservada da linguagem
//console.log(marca, portas) // 'marca' e 'portas' estão acessíveis apenas dentro do escopo do bloco

// Como corrigir o erro abaixo:
const dois = 2 //solução
function somarDois (x) {
  const dois = 2
  return x + dois
}

function dividirDois (x) {
  // return x + dois
  return x / dois //solução
}
console.log(somarDois(4))
console.log(dividirDois(10))


// O que fazer para total retornar 500?
var numero = 50;

// for(let numero = 0; numero < 10; numero++) { //solução
for(var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);