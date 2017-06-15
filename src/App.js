import React, { Component } from 'react'
import logo from './logo.svg'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
        </div>
      </BrowserRouter>
    )
  }
}
export default App
