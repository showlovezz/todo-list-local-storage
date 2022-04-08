import React from 'react';
import PropTypes from 'prop-types'
import {ListGroup, Alert} from 'react-bootstrap'

import ListItem from './ListItem';

const List = ({del, done, todoList}) => {
  if (todoList.length === 0) {
    return (
      <Alert variant='secondary' className='text-center mb-0'>
        <Alert.Heading className='text-danger'>No Todo Found !</Alert.Heading>
        <p className='mb-0'>Add your own todo !</p>
      </Alert>
    )
  }

  return (
    <ListGroup>
      {
        todoList &&
        todoList.map((todo) => {
          return (
            <ListItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              delHandler={del}
              doneHandler={done}
              done={todo.done}
            />
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
