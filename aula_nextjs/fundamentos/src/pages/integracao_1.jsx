import { useState } from 'react'
import Layout from '../components/Layout'

export default function Integracao() {
  const [cliente, setCliente] = useState({})
  const [cod, setCod] = useState(1)

  async function obterCliente() { //codigo sincrono

    // function obterCliente() { asincrono fazendo por middleware que interceptam a req. e promises
    // fetch(`http://localhost:3000/api/clientes/${cod}`)
    //   .then(resp => resp.json())
    //   .then(dados => setCliente(dados))

    //esperar pra fazer
    const resp = await fetch(`http://localhost:3000/api/clientes/${cod}`)
    const dados = await resp.json()
    setCliente(dados)
  }

  return (
    <Layout>
      <div>
        <input type="number" value={cod} onChange={e => setCod(e.target.value)} />
        <button onClick={obterCliente}>Obter Cliente</button>
      </div>
      <ul>
        <li>Codigo : {cliente.id}</li>
        <li>Nome : {cliente.nome}</li>
        <li>email : {cliente.email}</li>
      </ul>
    </Layout>
  )
}