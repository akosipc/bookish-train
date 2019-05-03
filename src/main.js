import React from 'react'
import { render } from 'react-dom'
import ErrorBoundary from './Shared/components/ErrorBoundary'
import Counter from './Counter'
import ArtworkDashboardContainer from './ArtworkDashboard/containers/ArtworkDashboardContainer'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <ErrorBoundary>
      <ArtworkDashboardContainer/>      
    </ErrorBoundary>,
    document.getElementById('artwork-mount')
  )
})
