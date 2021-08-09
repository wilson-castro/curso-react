import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

const Menu = props => (
  <aside className="Menu">
    <nav>
      <ul>
        <li>
          <Link to="/param/123">Param #01</Link>
        </li>
        <li>
          <Link to="/param/Legal">Param #02</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
      </ul>
      <li>
        {/* Qualquer url que tem / vai pra inicio
         usar exact pra pegar apenas o que tive / 
         caso contrario sempre deixar em ultimo*/}
        <Link to="/">Início</Link>
      </li>
    </nav>
  </aside>
)

export default Menu