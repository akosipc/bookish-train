Todo for this React 16 tutorial
- https://reactjs.org/docs/portals.html
- https://reactjs.org/docs/context.html
  - Build a notification container with ContextAPI
  - Build a Cart
- https://reactjs.org/docs/refs-and-the-dom.html
- Typechecking
  - Flow, Typescript or PropTypes

Todo in this Weebpack Tutorial
- [x] Compile React v1 in Challonge
- [x] Compile React v2 in Challonge
- [ ] Compile Stylesheets in Challonge
  - [ ] Bootstrap 3
  - [ ] Iconsets
  - [ ] Images

## React Standards
#### In spreading state and props attributes
If you will be using the state and props attributes more than once, it would be a good idea to spread the attributes to make things much more easier to type. Be wary of conflicting attributes names though.

#### Using ErrorBoundary
This only works in the `render` function. It will not work if you have the error exception on a different function. Also, only works if the component is the parent of the component that raised the error.

#### Use Fragments
Roan's been having some problems with our extra divs and spans when making our components. Please use Fragments so our dear friend doesn't go insane
- https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html

#### Use ContextAPI sparringly
ContextAPI is great and it can replace much of the State management platforms that we have like flux or redux.

## React Samples

#### Here's a sample format of a normal React Container
```react
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const ACTION_1 = "action_1"
export const ACTION_2 = "action_2"

export default class SampleContainer extends Component {
  constructor () {
    super ()

    this.state = {
      attribute1: undefined,
      attribute2: undefined,
    }
  }

  // Redux style of changing the state
  changeState (action, data) {
    switch (action) {
      case ACTION_1: { return this.setState({ attribute1: data.attribute1 }) }
      case ACTION_2: { return this.setState({ attribute2: data.attribute2 }) }
      default: { return this.state }
    }
  }

  render () {
    const { collection } = this.props
    const { attribute1, attribute2 } = this.state

    return (
      collection.map((member, key) => {
        return (
          <Item
            key={ key }
            itemAttribute1={ member.attribute1 } 
            itemAttribute2={ member.attribute2 }
            onSelect={ (action, data) => { this.changeState(action, data) } )
          />
        )
      })
    )
  }
}

SampleContainer.propTypes = {
  collection: PropTypes.arrayOf({
    attribute1: PropTypes.string.isRequired,
    attribute2: PropTypes.string
  }).isRequired
}
```

#### Here's a sample format of a normal React Component
```react
import React, { Component } from 'react'

export default class Item extends Component {
  constructor () {
    super () 

    this.state = { attribute1: false }
  }

  handleClick () {
    this.setState({ attribute1: true })
  }

  render () {
    const { attribute1 } = this.state
    const { itemAttribute1, itemAttribute2 } = this.props

    return (
      <section onClick={ () => { this.handleClick() } }>
        <div> { itemAttribute1 } </div>
        <div> { itemAttribute2 } </div>
      </section>
    )
  }
}
```

#### Here's a sample of mounting the sample container

```react
import React from 'react'
import { render } from 'react-dom'

import SampleContainer from '../Sample/containers/SampleContainer'
import ErrorBoundary from '../Shared/components/ErrorBoundary'

App.mountSampleContainer(() => {
  const elem = document.getElementById('sample-container-mount')

  render (
    <ErrorBoundary>
      <SampleContainer
        collection={ elem.dataset.collection }
      />
    </ErrorBoundary>,
    elem
  )
})

`````
