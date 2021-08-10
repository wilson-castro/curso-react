import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const mergeChar = function (text1, text2) {
    return [...text1].map(function (element, index) {
        return `${element || ""}${text2[index] || ""}`
    }).join("")
}


const UseRef = (props) => {
    const eventSetValue = (event, setValue) => setValue(event.target.value)
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const count = useRef(0) //retorna um onjeto mutavel com atributo current
    //current é o valor atual e pode ser alterado apenas com refernecia .current
    //o componente não é renderizado para alterar o state do count
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(function () {
        count.current++
        myInput2.current.focus()
    }, [value1])

    useEffect(function () {
        count.current++
        myInput1.current.focus()
    }, [value2])




    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Valor : {mergeChar(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input"
                    ref={myInput1}
                    value={value1} onChange={event => eventSetValue(event, setValue1)} />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <input type="text" className="input"
                    ref={myInput2}
                    value={value2} onChange={event => eventSetValue(event, setValue2)} />
            </div>
        </div>
    )
}

export default UseRef
