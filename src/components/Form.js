import React from 'react';
import PropTypes from 'prop-types'
import { Form as BootstrapForm, Row, Col, Button } from 'react-bootstrap'

const Form = ({todo, change}) => {
  return (
    <BootstrapForm className='mb-4'>
      <Row className='d-flex align-items-center'>
        <Col md={9}>
          <BootstrapForm.Control size='lg' value={todo} onChange={change} />
        </Col>
        <Col md={3} className='text-center'>
          <Button variant='primary' size='lg'>ADD TODO</Button>
        </Col>
      </Row>
    </BootstrapForm>
  )
}

Form.propTypes = {
  todo: PropTypes.string,
  change: PropTypes.func,
}

export default Form
