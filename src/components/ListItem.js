import React from 'react';
import PropTypes from 'prop-types'
import {ListGroup, Button} from 'react-bootstrap'

const ListItem = ({id, title, delHandler, doneHandler, done}) => {
  return (
    <ListGroup.Item className={`d-flex justify-content-between align-items-center ${done ? 'bg-success' : ''}`}>
      {
        done ? <del>{title}</del> : title
      }
      <div>
        <Button variant='danger' className='me-4' onClick={() => delHandler(id)}>
          <i className='fa-solid fa-trash-can' />
        </Button>
        <Button variant='secondary' onClick={() => doneHandler(id)}>
          {
            done ? (
              <i className='fa-solid fa-undo' />
            ) : (
              <i className='fa-solid fa-check' />
            )
          }
        </Button>
      </div>
    </ListGroup.Item>
  )
}

ListItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  delHandler: PropTypes.func,
  doneHandler: PropTypes.func,
  done: PropTypes.bool,
}


export default ListItem
