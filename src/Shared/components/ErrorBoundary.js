import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      error: null,
      hasError: false,
      errorInfo: null
    }
  }

  componentDidCatch(error, info) {
    this.setState({ 
      error: error,
      hasError: true,
      errorInfo: info
    })
  }

  render () {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <details>
            { this.state.error && this.state.error.toString() }
            <br/>
            { this.state.errorInfo.componentStack }
          </details>
        </div>
      )
    }

    return this.props.children
  }
}
