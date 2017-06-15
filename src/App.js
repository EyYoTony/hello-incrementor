import React, { Component } from 'react'
//import logo from './logo.svg'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Incrementor from './pages/incrementor'
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/incrementor" component={Incrementor} />
        </div>
      </BrowserRouter>
    )
  }
}
export default App
