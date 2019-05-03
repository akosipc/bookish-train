import React, { Component } from 'react'

export default class Counter extends Component {
  constructor () {
    super()

    this.state = {
      count: 0
    }
  }

  handleClick () {
    const { count } = this.state

    this.setState({ count: count + 1 })
  }

  render () {
    if (this.state.count === 3) {
      throw new Error('Unreasonable Error')
    }

    return (
      <button onClick={() => { this.handleClick() }} >
        Count: { this.state.count }
      </button>
    )
  }
}
