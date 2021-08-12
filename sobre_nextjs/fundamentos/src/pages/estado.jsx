import { func } from "prop-types"
import { useState } from "react"
import Layout from "../components/Layout"

export default function Estado() {
  const [numero, setNumero] = useState(0)

  function inc() {
    setNumero(numero + 1)
  }

  return (
    <Layout titulo="Componente com Estado">
      <div>
        <span>{numero}</span>
      </div>
      <button onClick={inc}>Incrementar</button>
    </Layout>
  )
}