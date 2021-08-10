import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle.jsx'

function calcFatorial(n) {
    const number = parseInt(n)
    if (number < 0) return -1
    if (number === 0) return 1
    return calcFatorial(number - 1) * number
    //função recursiva//
    /* Exemplo de como funciona :
    6 * calcFatorial( 5 * calcFatorial(4 * calcFatorial(3 *calFatorial(2 * calcFatorial(1 * calcFatorial(0))))))
    -                 -                                                                 -                v
    -                 -                                                                 v               Parametro 0 o retun é 1
    -                 v                                                   1)quando restar 1*1 o resultado é um
    v                 2)primeira vez que foi subtraindo e multiplicando em cascata
    3)numero inicial


    Após a função retornar um, o efeito cascata irá reverter e os returns iniciarão as multiplicaçãos
    no sentido contrário ao da cascata do ultimo return ao menor
    
    */
}

function zeroRestDivision(n) {
    const number = parseInt(n)
    if (number % 2 === 0) return true
    if (number % 2 !== 0) return false

    return 'Negative number!!!'
}


const UseEffect = (props) => {
    //Não se deve alterar o resultado diretamente dentro do componente
    //no caso, dentro do useEffect ou dentro do render
    //Apenas em eventos chamados pela interface
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [numberOption, setnumberOption] = useState("ìmpar")
    const eventSetValue = (event, setValue) => setValue(event.target.value)

    //Quando você alterar um valor você gera um efeito colateral, que vai influenciar o estado e talvez a interface
    //Ou quando for gerar um estado que influenciará outro estado
    useEffect(function () {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function () {
        if (zeroRestDivision(number) === true || !zeroRestDivision(number)) {
            setnumberOption(zeroRestDivision(number) ? 'Par' : 'Ímpar')
        } else {
            setnumberOption('Inválido')
        }

    }, [number])
    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial : </span>
                    <span className="text red" >{fatorial === -1 ? 'Não existe' : fatorial}</span>
                </div>
                <input type="number" min="0" value={number}
                    onChange={event => eventSetValue(event, setNumber)} className="input" />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text red" >{numberOption}</span>
                </div>
            </div>

        </div>
    )
}

export default UseEffect
