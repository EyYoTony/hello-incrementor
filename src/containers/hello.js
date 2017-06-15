import React from 'react'

class Hello extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isCool: false }
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.props.firstName}</h1>
        <h2>Are you cool cat bad? {this.state.isCool ? 'yes' : 'no'}</h2>
      </div>
    )
  }
}

export default Hello
