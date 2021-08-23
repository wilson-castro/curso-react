/* eslint-disable no-useless-constructor */
import React, { Component } from "react"

export default class Saudacao extends Component {

  state = {
    tipo: this.props.tipo,
    nome: this.props.nome
  }

  constructor(props) {
    super(props)

    this.setNome = this.setNome.bind(this)
  }

  setTipo(event) {
    let i = 1
    setInterval(() => {
      this.setState({ tipo: ++i })
    }, 1000)
    this.setState({ tipo: event.target.value })
  }
  setNome(event) {
    this.setState({ nome: event.target.value })
  }

  render() {
    const { tipo, nome } = this.state

    return (
      <div>
        <h1>{tipo} {nome}</h1>
        <hr />
        <input type="text" placeholder="tipo..." value={tipo}
          onChange={this.setTipo} />
        <input type="text" placeholder="Nome..." value={nome}
          onChange={event => this.setNome(event)} />

      </div>
    )
  }
}
