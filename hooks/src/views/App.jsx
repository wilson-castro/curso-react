import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import DataContext, { data } from './../data/DataContext'
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import Store from '../data/Store'

const App = props => {

    //para alterar o data context
    const [state, setState] = useState(data)
    return (

        <Store>
            <DataContext.Provider value={{ state, setState }}>
                <div className="App">
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </div>
            </DataContext.Provider>
        </Store>
    )
}

export default App