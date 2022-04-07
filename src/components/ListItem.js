import React from 'react';
import PropTypes from 'prop-types'
import {ListGroup, Button} from 'react-bootstrap'

const ListItem = ({title, delHandler, doneHandler}) => {
  return (
    <ListGroup.Item className='d-flex justify-content-between align-items-center'>
      {title}
      <div>
        <Button variant='danger' className='me-4' onClick={delHandler}>
          <i className='fa-solid fa-trash-can' />
        </Button>
        <Button variant='success' onClick={doneHandler}>
          <i className='fa-solid fa-check' />
        </Button>
      </div>
    </ListGroup.Item>
  )
}

ListItem.propTypes = {
  title: PropTypes.string,
  delHandler: PropTypes.func,
  doneHandler: PropTypes.func,
}


export default ListItem
