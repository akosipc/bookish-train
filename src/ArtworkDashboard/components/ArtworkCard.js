import React, { Component } from 'React'
import PropTypes from 'prop-types'

import { CurrencyContext } from '../../main'

export default class ArtworkCard extends Component {
  render () {
    const { title, description, imageSrc, amount } = this.props

    return (
      <CurrencyContext.Consumer>
        { (context) => (
            <div className='artwork'>
              { title }
              { description }
              <img src={ imageSrc }/>
              <span>
                { context.fullSymbol }
                { amount }
              </span>
            </div>
          )
        }
      </CurrencyContext.Consumer>
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
