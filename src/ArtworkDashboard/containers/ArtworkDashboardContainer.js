import React, { Component } from 'React'
import PropTypes from 'prop-types'

import ArtworkCard from '../components/ArtworkCard'

export default class ArtworkDashboardContainer extends Component {
  render () {
    const { artworks } = this.props

    return (
      artworks.map((artwork) => {
        return (
          <ArtworkCard
            title={ artwork.title }
            amount={ artwork.sellingPrice }
            description={ artwork.description }
          />
        )
      })
    )
  }
}

ArtworkDashboardContainer.propTypes = {
  artworks: PropTypes.array.isRequired
}

ArtworkDashboardContainer.defaultProps = {
  artworks: []
}
