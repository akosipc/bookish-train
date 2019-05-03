import React, { Component } from 'React'
import PropTypes from 'prop-types'

export default class ArtworkCard extends Component {
  render () {
    const { title, description, imageSrc, amount } = this.props

    return (
      <div className='artwork'>
        { title }
        { description }
        <img src={ imageSrc }/>
        { amount }
      </div>
    )
  }
}

ArtworkCard.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string
}

ArtworkCard.defaultProps = {
  imageSrc: "https://www.stevensegallery.com/480/480"
}
