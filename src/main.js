import React from 'react'
import { render } from 'react-dom'
import Counter from './Counter'

document.addEventListener('DOMContentLoaded', () => {
  render(React.createElement(Counter), document.getElementById('mount'))
})
