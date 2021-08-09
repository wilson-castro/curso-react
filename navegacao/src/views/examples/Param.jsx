import React from "react"
import { useParams } from "react-router"

const Param = props => {
  const { id } = useParams()
  return (
    <div>
      <h1>Parametro</h1>
      <h2>Valor : {id} </h2>
    </div>
  )
}

export default Param