import Layout from "../components/Layout"

export default function Jsx() {
  //Jsx é implementado deboas no contexto JS
  const titulo2 = <h2>título com h2</h2>

  //fora do return é um contexto de Javascript
  return (
    <Layout>
      <div>
        <h1>JSX é um conceito central</h1>

        {
          titulo2
          /**Dentro de um par de Chaves você abre um espaço em JS */
        }
      </div>
    </Layout>
  )
}