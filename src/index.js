import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import Articles from './components/ArticlesPage/ArticlesPage'
import './index.css'

const App = () => {
  return (<Articles/>)
}

ReactDOM.render(<App />, document.querySelector('#root'))
