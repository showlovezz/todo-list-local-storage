import React from 'react';
import PropTypes from 'prop-types'
import {ListGroup} from 'react-bootstrap'

import ListItem from './ListItem';

const List = ({del, done}) => {
  return (
    <ListGroup>
      <ListItem title='Title 1' delHandler={del} doneHandler={done} />
      <ListItem title='Title 2' delHandler={del} doneHandler={done} />
    </ListGroup>
  )
}

List.propTypes = {
  del: PropTypes.func,
  done: PropTypes.func,
}

export default List
