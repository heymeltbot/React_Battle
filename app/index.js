import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/popular'
import Battle from './components/Battle'

//Component has state
//Lifecycle
//UI

class App extends React.Component {
    render(){
        return<div className= 'container'>
            <Battle/>
        </div>
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
    //react element
    //where to render element to
)