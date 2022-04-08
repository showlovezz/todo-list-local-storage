import React from 'react';
import PropTypes from 'prop-types'
import {ListGroup} from 'react-bootstrap'

import ListItem from './ListItem';

const List = ({del, done, todoList}) => {
  return (
    <ListGroup>
      {
        todoList.map((todo) => {
          return (
            <ListItem key={todo.id} id={todo.id} title={todo.title} delHandler={del} doneHandler={done} />
          )
        })
      }
    </ListGroup>
  )
}

List.propTypes = {
  del: PropTypes.func,
  done: PropTypes.func,
  todoList: PropTypes.array,
}

export default List
