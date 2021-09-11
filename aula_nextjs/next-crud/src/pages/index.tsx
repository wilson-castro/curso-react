import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 54, '4')
  ]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')

  }
  function clienteExcluido(cliente: Cliente) {
    console.log(`excluir - ${cliente.nome}`);

  }
  function salvarCliente(cliente: Cliente) {
    setVisivel('tabela')
    console.log(cliente);

  }
  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
      <Layout titulo="Cadastro simples">

        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" cor="green"
                onClick={novoCliente}>
                Novo cliente
              </Botao>
            </div>
            <Tabela clientes={clientes}
              clienteExcluido={clienteExcluido}
              clienteSelecionado={clienteSelecionado}
            />
          </>

        ) : (
          <Formulario cliente={cliente}
            cancelado={() => setVisivel('tabela')}
            clienteMudou={salvarCliente} />
        )}

      </Layout>
    </div >
  )
}
