import Link from 'next/link'
import styles from '../styles/Estiloso.module.css'
import Layout from '../components/Layout'
//nos module css sempre usar uma classe ou id antes dos seletores
//exceto no css global

export default function Estiloso() {
  return (
    <Layout titulp="Exemplo de CSS modularizado">
      <div className={styles.roxo}>
        <h1>Estilo usando CSS Módulos</h1>
      </div>
    </Layout>
  )
}