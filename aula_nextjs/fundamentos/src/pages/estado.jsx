import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado() {

  const state = useState(0)
  let [num, setNum] = state

  function inc() {
    setNum(num + 1)
  }

  return (
    <Layout titulo="Componente com estado">
      <span>{num}</span>
      <button onClick={inc}>Incrementar</button>
    </Layout>
  )
}