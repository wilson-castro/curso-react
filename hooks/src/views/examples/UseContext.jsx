import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import DataContext from '../../data/DataContext'
import SectionTitle from '../../components/layout/SectionTitle'
import { AppContext } from '../../data/Store'

const UseContext = (props) => {
    const { state, setState } = useContext(DataContext)

    //Chamando os dados lá de outro ramo longe
    const context = useContext(DataContext)

    function addNumber(delta) {
        setState({
            /** Trazer o mesmo atributos e so alterar */
            ...state,
            number: context.state.number + delta
        })
    }

    const { number, text, setNumber } = useContext(AppContext)

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">
                    {state.text}
                </span>
                <span className="text">
                    {state.number}
                </span>

                <div>
                    <button onClick={() => addNumber(1)} className="btn">+1</button>
                    <button onClick={() => addNumber(-1)} className="btn">-1</button>
                </div>
            </div>

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button className="btn"
                        onClick={() => setNumber(number + 1)}>+1</button>
                    <button className="btn"
                        onClick={() => setNumber(number - 1)}>-1</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext
