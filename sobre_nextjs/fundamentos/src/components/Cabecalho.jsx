

export default function Cabecalho(props) {
  //props é somente leitura não pode ser alterado 
  return (
    <header>
      <h1>{props.titulo}</h1>
    </header>
  )
}