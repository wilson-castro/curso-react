import Pessoa from './pessoa'
//Importação padrão ecmascript
import './modulos/moduloA'
// const Pessoa = require('./pessoa')//Importação do node

import './assets'

const atendente = new Pessoa()
//"":"",
console.log(atendente.cumprimentar());