import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const cliente = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '1'),
    new Cliente('Carlos', 23, '1'),
    new Cliente('Pedro', 54, '1')
  ]

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
      <Layout titulo="Cadastro simples">
        <Tabela clientes={cliente}></Tabela>
      </Layout>
    </div >
  )
}
