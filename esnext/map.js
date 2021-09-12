//biblioteca de objetos referidos por chaves que os retornam possibilitando o seus acesso
//bom para agrupar metodos no lugar de vários ifs ou separar funcoes que tenham relacao
const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log('\n1)');
console.log(tecnologias);
console.log('\n2)');
console.log(tecnologias.get('react'));
console.log('\n3)');
console.log(tecnologias.get('react').framework);

console.log('=================');

const chavesVariadas = new Map([
  ['Função', function () { return 'olá' }],
  ['Objeto', { nome: 'Wilson' }],
  [123, 'Número'],
])

console.log('\n1)');
chavesVariadas.forEach((vl, ch) => {
  console.log(ch, vl);
})
console.log('\n2)');
console.log(chavesVariadas);

console.log('\n3)');
console.log(chavesVariadas.has(123));//Está contido?
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123));

console.log('\n4)');
console.log(chavesVariadas.size);

console.log('\n5)');
console.log(chavesVariadas.get('Função')());

