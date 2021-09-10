import Cliente from "../core/Cliente";
import { IconeEdicao, IconeLixo } from "./Icones";

interface TabelaProps {
  clientes: Cliente[]
}

export default function Tabela(props: TabelaProps) {

  function renderizarCabecalho() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        <th className="p-4">Ações</th>
      </tr>
    )
  }

  function renderizarDados() {
    return props.clientes?.map((cliente, i) => {
      return (
        <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
          <td className="text-left p-4">{cliente.id}</td>
          <td className="text-left p-4">{cliente.nome}</td>
          <td className="text-left p-4">{cliente.idade}</td>
          {renderizarAcoes(cliente)}
        </tr>
      )
    })
  }

  function renderizarAcoes(cliente: Cliente) {
    return (
      <td className="flex">
        <button className={`
        flex justify-center items-center
        text-green-600 rounded-full p-2 m-1
        hover:bg-purple-50`}>
          {IconeEdicao}
        </button>
        <button className={`
        flex justify-center items-center
        text-red-500 rounded-full p-2 m-1
        hover:bg-purple-50`}>
          {IconeLixo}
        </button>
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
      text-gray-100
      bg-gradient-to-r from-purple-500 to-purple-800`}>
        {renderizarCabecalho()}
      </thead>
      <tbody>
        {renderizarDados()}
      </tbody>
    </table>
  )
}