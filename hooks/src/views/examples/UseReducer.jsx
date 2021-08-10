import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store'
import { multiplyFor7 } from '../../store/actions/index'

// const initialState = {
//     cart: [],
//     products: [],
//     user: null,
//     number: 100
// }
//pegar o estdo atual e pra cada ação evoluit o estado alterando um atributo
// function reducer(state, action) {
//     switch (action.type) {
//         case 'number_add2':
//             return { ...state, number: state.number + 2 }
//         case 'login':
//             return { ...state, user: { name: action.payload } }
//         default:
//             return state
//     }
// }

// function reducer(state, action) {
//     switch (action.type) {
//         case 'multiplyFor7':
//             return { ...state, number: (state.number) * 7 }
//         case 'divideBy25':
//             return { ...state, number: (state.number) / 25 }
//         case 'parseToInt':
//             return { ...state, number: parseInt(state.number) }
//         case 'addNNumber':
//             return { ...state, number: action.payload }
//         default:
//             return state
//     }
// }



const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                <span className="text"> {state.number}</span>

                <div>
                    <label htmlFor="inputNumber" className="text">Digite um número</label>
                    <input id="inputNumber" type="number" className="input"
                        onChange={event => dispatch({ type: 'addNNumber', payload: event.target.value || 0 })} />
                </div>
                <div>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'divideBy25' })}>÷ 25</button>
                    <button className="btn"
                        onClick={() => multiplyFor7(dispatch)}>X7</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'parseToInt' })}>Int</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
