import Navegador from '../components/Navegador'

export default function Inicio() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexWrap: 'wrap'
    }}>
      <Navegador destino="/estiloso" texto="estiloso" cor="#081842" />
      <Navegador destino="/jsx" texto="JSX" cor="#0ccc0c" />
      <Navegador destino="/exemplo" texto="Exemplo" cor="crimson" />
      <Navegador destino="/navegacao" texto="Navegação #01" cor="green  " />
      <Navegador destino="/cliente/123" texto="Navegação #02" cor="blue" />
      <Navegador destino="/estado" texto="Componente com Estado" cor="#aa5f22" />
      <Navegador destino="/integracao_1" texto="Integração com API" cor="#229aaa" />
      <Navegador destino="/estatico" texto="Conteúdo estático" cor="#8422aa" />

    </div>
  )
}


//Jsx permite implementar html que futuramente é convertido em js
//Next não precisa configurar muitas coisas
//como as rotas, apenas convenções 
//os compoentens vem com url atrelada pelas paginas
//a estrutura de pasta define as estrtura de url