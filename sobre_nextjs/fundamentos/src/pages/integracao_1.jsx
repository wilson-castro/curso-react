import { useState } from 'react'
import Layout from '../components/Layout'

export default function Integracao() {

  const [cliente, setCliente] = useState({})
  const [codigo, setCodigo] = useState(1)

  async function obterCliente() {
    // fetch(`http://localhost:3000/api/clientes/${codigo}`)
    //   .then(resp => resp.json())
    //   .then(dados => setCliente(dados))

    const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
    const dados = await resp.json()
    setCliente(dados)

  }

  return (
    <Layout>
      <div>
        <input type="number" value={codigo}
          onChange={event => setCodigo(event.target.value)} />
        <button onClick={obterCliente}>Obter Cliente</button>
      </div>
      <ul>
        <li>Código: {cliente.id}</li>
        <li>Nome: {cliente.nome}</li>
        <li>Email: {cliente.email}</li>
      </ul>
    </Layout>
  )
}