import React from 'react';
import PropTypes from 'prop-types'
import { ThemeProvider, Container, Row, Col } from 'react-bootstrap'

const Layout = ({children}) => {
  const style = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  }

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md']}
    >
      <Container>
        <Row style={style}>
          <Col lg={{ span: 8, offset: 2 }} md={{ span: 8, offset: 2 }}>{children}</Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
