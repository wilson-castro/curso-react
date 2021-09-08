/* eslint-disable @next/next/link-passhref */
import Link from "next/link"
import styles from '../styles/Navegador.module.css'

export default function Navegador(props) {

  return (
    <div>
      <Link href={props.destino} >
        <div className={styles.navegador} style={{
          backgroundColor: props.cor ?? 'dodgerblue'
        }}>
          {props.texto}
        </div>
      </Link>
    </div>
  )
}