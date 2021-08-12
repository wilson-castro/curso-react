import Layout from "../../components/Layout"
import { useRouter } from "next/router"

export default function ClientePorCodigo() {
  const router = useRouter()

  return (
    <Layout titulo="Navegação dinâmica">
      <span>Código = {router.query.codigo}</span>
    </Layout>

    //As chaves indicam que a rolta /codigo/alguma coisa é dinamica

  )
}