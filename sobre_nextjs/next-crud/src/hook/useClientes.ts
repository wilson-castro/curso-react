import { useEffect, useState } from "react"
import Cliente from "../core/Cliente"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes() {

  const repo: ClienteRepositorio = new ColecaoCliente()

  const { tabelaVisivel, formularioVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm()
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])

  useEffect(obterTodos,)

  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      exibirTabela()
    })
  }

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente)
    exibirFormulario()

  }

  function excluirCliente(cliente: Cliente) {
    console.log('cliente excluido ', cliente);

  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    exibirFormulario()
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()

  }

  return {
    cliente,
    tabelaVisivel,
    clientes,
    salvarCliente,
    novoCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos, exibirTabela
  }
}