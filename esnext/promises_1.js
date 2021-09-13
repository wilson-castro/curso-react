let a = 1
console.log(a)

let p = new Promise(function (resolve) {
  resolve(['Ana', 'Bia', 'Carlos'])
})

function primeitoElemento(array) {
  return array[0]
}
function primeiraLetra(string) {
  return string[0]
}
const letraMinuscula = letra => letra.toLowerCase()

p
  .then(primeitoElemento)
  .then(primeiraLetra)
  .then(letraMinuscula)
  .then(console.log)

new Promise(function (resolve) {
  resolve(['Ana', 'Bia', 'Carlos'])
})
  .then((valor) => {
    return valor[0]
  })
  .then(primeiro => primeiro[0])
  .then(letra => letra.toLowerCase())
  .then(function (letraMinuscula) {
    console.log(letraMinuscula)
  })
