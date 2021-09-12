//Conjunto que não aceita repetição e não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corintians')
times.add('Flamengo')
times.add('Vasco') //respetição que vai ser ignorada pq não há indexação

console.log(times);
console.log(times.size);
console.log(times.has('Vasco'));
times.delete('Flamengo')
console.log(times.has('Flamengo'));

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet);