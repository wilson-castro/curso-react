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

    </div>
  )
}