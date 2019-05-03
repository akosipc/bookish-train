import React from 'react'
import { render } from 'react-dom'
import ErrorBoundary from './Shared/components/ErrorBoundary'
import Counter from './Counter'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <ErrorBoundary>
      <Counter/>
    </ErrorBoundary>,
    document.getElementById('mount')
  )
})
