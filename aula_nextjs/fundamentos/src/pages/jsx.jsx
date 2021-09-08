import Layout from "../components/Layout"

export default function Jsx() {
  const a = 1
  const b = 3
  const ab = a + b
  const obj = { nome: "João", idade: 30 }
  const titulo = <h1>Jsx é um conceito central</h1>
  return (
    <Layout titulo="Entendendo o Jsx">
      <div>
        {titulo}
        <h2>{"Muito legal".toLocaleUpperCase()}</h2>
        <p>
          {JSON.stringify(obj)}
        </p>
        {ab}
      </div>
    </Layout>
  )
}