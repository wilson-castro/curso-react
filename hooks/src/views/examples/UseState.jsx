import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    //Opção 1
    // const array = useState(0)
    // const num = array[0]
    // const setNum = array[1]
    // Opção 2
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")


    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">
                    {count}
                </span>
                <div>
                    <button
                        onClick={() => setCount(count + 1)} className="btn">+1</button>
                    <button
                        onClick={() => setCount(count - 1)} className="btn">-1</button>

                    {/*Opção 1)Mudar o valor direto para X 
                    <button
                        onClick={() => setCount(1000)} className="btn">1000</button> */}
                    {/* Opção 2)Adicionar uma função dentro do setCount que vai deixar como parametro
                    o current(valor atual) */}
                    <button
                        onClick={() => setCount(current => current + 1000)} className="btn">1000</button>
                </div>
            </div>
            <SectionTitle title="Exercício #02" />
            <input type="text" className="input"
                value={name} onChange={event => setName(event.target.value)} />
            {/* COMPONENTE CONTROLADO : Interface não altera o estado e não se atualiza.
            Apenas o código(estado) altera a interface e nunca o contrário diretamente*/}
            {/* interface -> Chamando um evento, que alterou o estado, a interface foi atualizado
            Interface -> Evento-> atlera estado -> altera a interface */}
            <span className="text">{name}</span>

        </div>
    )
}

export default UseState
