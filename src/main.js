import React from 'react'
import { render } from 'react-dom'
import ErrorBoundary from './Shared/components/ErrorBoundary'
import Counter from './Counter'
import ArtworkDashboardContainer from './ArtworkDashboard/containers/ArtworkDashboardContainer'

document.addEventListener('DOMContentLoaded', () => {
  const artworks = [
    { title: "Artwork 1", amount: 16.99, description: "Artwork Description 1" },
    { title: "Artwork 2", amount: 26.99, description: "Artwork Description 2" },
    { title: "Artwork 3", amount: 36.99, description: "Artwork Description 3" },
  ]

  render(
    <ErrorBoundary>
      <ArtworkDashboardContainer
        artworks={ artworks }
      />
    </ErrorBoundary>,
    document.getElementById('artwork-mount')
  )
})

document.addEventListener('DOMContentLoaded', () => {
  render(
    <ErrorBoundary>
      <Counter/>
    </ErrorBoundary>,
    document.getElementById('mount')
  )
})
