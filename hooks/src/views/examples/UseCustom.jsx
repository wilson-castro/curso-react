import React, { useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {

    const [count, inc, dec] = useCounter()
    const url = 'http://files.cod3r.com.br/curso-react/estados.json'
    //encapsulando o fetch usando um hooks customizado
    const response = useFetch(url)


    function showStates(states) {
        return states.map(state => <li key={state.sigla}>{state.nome} - {state.sigla}</li>)
    }

    // 
    // fetch('http://files.cod3r.com.br/curso-react/estados.json')
    //     .then(resp => resp.json()).then(json => console.log(json))

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <div className="center">
                <SectionTitle title="Exercício #01" />
                <span className="text">
                    {count}
                </span>
                <div>
                    <button className="btn"
                        onClick={() => inc()}>+1</button>
                    <button className="btn"
                        onClick={() => dec()}>-1</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <ul>
                    {response.data ? showStates(response.data) : false}
                </ul>
            </div>
        </div>

    )
}

export default UseRef
