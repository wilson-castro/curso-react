//tagged templates - processa o template dentro de uma função. intercepta a template string
function tag(partes, ...valores) {
  console.log(partes);
  console.log(valores);
  return 'Outra String'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag`${aluno} está ${situacao}.`);
