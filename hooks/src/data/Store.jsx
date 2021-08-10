import React, { useState } from 'react'

const initialState = {
  number: 1234,
  text: 'Context API + Hooks'
}

export const AppContext = React.createContext(initialState)

const Store = function (props) {
  const [state, setState] = useState(initialState)

  //alterar somente os atributos do state, vulgo date context, e não o state completo
  function updateState(key, value) {
    setState({
      ...state,
      /** acessar a chave que vai ser dada por parametro*/
      [key]: value
    })
  }

  return (
    <AppContext.Provider
      value={{
        number: state.number, text: state.text,
        setNumber: n => updateState('number', n),
        setText: t => updateState('text', t)
      }} >
      {props.children}
    </AppContext.Provider >
  )
}

export default Store