/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export const BoaTarde = props => <h1>Boa tarde {props.nome}</h1>
//Modo 1 - Sem defaut mas nomeada
export const BoaNoite = props => <h1>Boa noite {props.nome}</h1>
//Modo 1- Sem defaut mas nomeada

//Modo 2 - passando sem o destructuring
// export default BoaTarde

export default { BoaTarde, BoaNoite }
