import React from 'react';
import PropTypes from 'prop-types'
import { Card as CardComponent } from 'react-bootstrap'

const Card = ({children}) => {
  return (
    <CardComponent>
      <CardComponent.Body>{children}</CardComponent.Body>
    </CardComponent>
  )
}

Card.propTypes = {
  children: PropTypes.node,
}

export default Card
