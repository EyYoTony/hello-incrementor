import React from 'react'

class Incr extends React.Component {
  constructor(props) {
    super(props)
    this.state = { total: 0, isOdd: false }
    this.incrementCount = this.incrementCount.bind(this)
    this.decrementCount = this.decrementCount.bind(this)
  }

  incrementCount = () => {
    this.setState((prevState, props) => ({
      total: prevState.total + props.incrementor,
      isOdd: (prevState.total + props.incrementor) % 2 === 1
    }))
  }

  decrementCount = () => {
    this.setState((prevState, props) => ({
      total: prevState.total - props.decrementor,
      isOdd: (prevState.total - props.decrementor) % 2 === 1
    }))
  }

  componentDidMount() {
    console.log(
      `componentDidMount() updating our state to ${this.props.initialValue}`
    )
    this.setState({
      total: this.props.initialValue,
      isOdd: this.props.initialValue % 2 === 1
    })
  }

  render() {
    console.log(`RENDER! ${JSON.stringify(this.state, null, 2)}`)
    return (
      <div>
        <h1>Total: {this.state.total}</h1>
        <h2>isOdd: {this.state.isOdd ? 'true' : 'false'}</h2>
        <button
          className="f6 link dim br2 ph3 pv2 mb2 dib white bg-navy"
          type="button"
          onClick={this.incrementCount}
        >
          +
        </button>
        <button
          className="f6 link dim br2 ph3 pv2 mb2 dib white bg-navy"
          type="button"
          onClick={this.decrementCount}
        >
          -
        </button>
      </div>
    )
  }
}

export default Incr
