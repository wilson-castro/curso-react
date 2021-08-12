
interface EntradaProps {
  tipo?: 'text' | 'number'
  texto: string
  valor: any
  somenteLeitura?: boolean
  className?: string
  valorMudou?: (valor: any) => void
}

export default function Entrada(props: EntradaProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-2">{props.texto}</label>
      <input
        onChange={event => props.valorMudou?.(event.target.value)}
        value={props.valor} readOnly={props.somenteLeitura}
        type={props.tipo ?? 'text'} className={`
        border border-purple-500 rounded-lg
        focus:outline-none  bg-gray-100
        px-4 py-2 ${props.somenteLeitura ? '' : 'focus:bg-white'}
        `}
      />
    </div>
  )
}