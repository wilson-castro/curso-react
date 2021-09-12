//Arrow function
const soma = (a, b) => a + b
console.log(soma(2, 3));

const dobroNumero = a => a * 2
console.log(dobroNumero(2));

const subtrair = (a, b) => {
  return a - b
}
console.log(subtrair(4, 2));

//Arrow function (this)

//caso 1)Escrita diretamente num arquivo de modulos do node
const lexico1 = () => console.log(this === exports);

//Parametro default
function log(texto = "Node") {
  console.log(texto);
}

log()
log('Sou mais forte')

//operador rest quando está num contexto de uma função
// Rest agrupa os argumentos
function total(...numeros) {
  let total = 0
  numeros.forEach(n => total += n)
  return total
}
console.log(total(2, 3, 4, 5));

//operador spread quando está num contexto de objeto ou array