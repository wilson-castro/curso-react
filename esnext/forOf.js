//diferente do forin que opera com indices, o forof opera com valores
for (const letra of 'Wilson') {
  console.log(letra);
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
  console.log(i);//indices
}
for (const assunto of assuntosEcma) {
  console.log(assunto);
}

const assuntosMap = new Map([
  ['Map', { abordado: true }],
  ['Set', { abordado: true }],
  ['Promise', { abordado: false }]
])

for (const assunto of assuntosMap) {
  console.log(assunto);
}
for (const assunto of assuntosMap.keys()) {
  console.log(assunto);
}
for (const assunto of assuntosMap.values()) {
  console.log(assunto);
}

for (let [ch, vl] of assuntosMap.entries()) {
  console.log(ch, vl);
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
  console.log(letra);
}