import { useState } from 'react'
import Cliente from '../core/Cliente';
import Botao from './Botao';
import Entrada from './Entrada'

interface FormularioProps {
  cliente: Cliente
  cancelado?: () => void
  clienteMudou?: (cliente: Cliente) => void
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id
  const [nome, setNome] = useState(props.cliente?.nome ?? '')
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

  return (
    <div>
      {id ? (
        <Entrada
          somenteLeitura={true}
          texto="Código" tipo="text" valor={id}
          className="mb-4"
        />
      ) : false}

      <Entrada
        texto="Nome" tipo="text"
        valor={nome} valorMudou={setNome}
        className="mb-4"
      />
      <Entrada
        texto="Idade" tipo="number"
        valor={idade} valorMudou={setIdade}
      />
      <div className="flex mt-7 justify-end">
        <Botao cor="blue" className="mr-2"
          onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
          {id ? 'Alterar' : 'Salvar'}
        </Botao>
        <Botao onClick={props.cancelado}>Cancelar</Botao>
      </div>

    </div >
  )
}