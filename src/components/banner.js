import React from 'react'

class Banner extends React.component {
  constructor(props) {
    super(props)

    let initialState = { msg: 'Hello', severity: 1, confirmed: false }
    console.log(`initializing state! ${JSON.stringify(initialState, null, 2)}`)

    this.state = initialState
  }

  render() {
    console.log(`I JUST RENDERED!`, JSON.stringify(this.state, null, 2))
    return <div />
  }
}

export default Banner
