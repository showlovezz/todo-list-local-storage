import React from 'react';
import {ListGroup, Button} from 'react-bootstrap'

const List = () => {
  return (
    <ListGroup>
      <ListGroup.Item className='d-flex justify-content-between align-items-center'>
        List Item
        <div>
          <Button variant='danger' className='me-4'><i className='fa-solid fa-trash-can' /></Button>
          <Button variant='success'><i className='fa-solid fa-square-check' /></Button>
        </div>
      </ListGroup.Item>
    </ListGroup>
  )
}

export default List
