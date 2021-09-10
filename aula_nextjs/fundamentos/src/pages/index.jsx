import Navegador from '../components/Navegador'

export default function Inicio() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100vh'
    }}>
      <Navegador texto="Estiloso" destino="/estiloso" cor="crimson" />
      <Navegador texto="Exemplo" destino="/exemplo" cor="darkviolet" />
      <Navegador texto="JSX" destino="/jsx" />
      <Navegador texto="Navegação #01" destino="/navegacao" cor="darkblue" />
      <Navegador texto="Navegação #02" destino="/cliente/sp-2/123" cor="green" />
      <Navegador texto="Componente com estado" destino="/estado" cor="#14dc649b" />
      <Navegador texto="Integração com API #01" destino="/integracao_1" cor="#dc14bb9b" />
      <Navegador texto="Conteúdo Estático" destino="/estatico" cor="#dc14149b" />

    </div>
  )
}