import React from 'react'
import ReactDOM from 'react-dom'

import Filho from './componentes/Filho'
import Pai from './componentes/Pai'
// import Saudacao from './componentes/Saudacao'
// import BomDia from './componentes/BomDia'
// import Primeiro from './componentes/Primeiro'

//Modo 1
//import { BoaTarde, BoaNoite } from './componentes/Multiplos'
//Modo 2
// import BoaTarde, { BoaNoite } from './componentes/Multiplos'
//Modo 3 - Usando objeto default
// import Multi from './componentes/Multiplos'

ReactDOM.render(
  <div>
    {/* <Multi.BoaTarde nome="Wilson"></Multi.BoaTarde>
    <Multi.BoaNoite nome="Costa"></Multi.BoaNoite> */}

    <Pai nome="Paulo" sobrenome="Silva">
      <Filho nome="Pedro" sobrenome="Silva"></Filho>
      <Filho nome="Paulo" sobrenome="Silva"></Filho>
      <Filho nome="Carla" sobrenome="Silva"></Filho>
    </Pai>
  </div>
  , document.getElementById('root'))