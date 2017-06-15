import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
  //run some other code here
  return (
    <div className="pa2 avenir f6 fw2 bg-gray">
      <Link className="mr2 navy" to="/">Home</Link>
      <Link className="mr2 navy" to="/about">About</Link>
      <Link className="mr2 navy" to="/incrementor">Incrementor</Link>
    </div>
  )
}
