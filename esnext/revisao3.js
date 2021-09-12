//ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj));//retornar array com os valores
console.log(Object.entries(obj));//retornar array de arrays(matriz) de chaves e valores do obj.

//Melhorias na notação literal
const nome = 'Carla'
const sobrenome = 'Silva'
const pessoa = {
  nome,
  sobrenome: sobrenome,
  ola() {
    return 'oi gente'
  },
  ola2: function () {
    return 'oi de novo'
  }

}
console.log(pessoa.nome, pessoa.ola());
console.log(pessoa.sobrenome, pessoa.ola2());

//Class
class Animal { }
class Cachorro extends Animal {
  falar() {
    return 'au'
  }
}
console.log(new Cachorro().falar());

