import Link from "next/link";
import style from '../styles/Navegador.module.css'

export default function Navegador(props) {
  return (
    <Link passHref href={props.destino}>

      <div className={style.navegador}
        style={{
          backgroundColor: props.cor ?? 'dodgerblue'
        }}>
        {props.texto}
      </div>
    </Link >
  )
}