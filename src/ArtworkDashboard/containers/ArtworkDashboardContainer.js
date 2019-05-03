import React, { Component } from 'React'
import PropTypes from 'prop-types'

import ArtworkCard from '../components/ArtworkCard'

export default class ArtworkDashboardContainer extends Component {
  render () {
    const { artworks } = this.props

    return (
      artworks.map((artwork, key) => {
        return (
          <ArtworkCard
            key={ key }
            title={ artwork.title }
            amount={ artwork.amount }
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
