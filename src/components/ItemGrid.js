import { Grid , Row , Col } from 'react-bootstrap'
import React from 'react'
import Items from './Items'

const ItemGrid = () => (
  <Grid>
    <Row className="show-grid">
      <Col md={4}><Items/></Col>
      <Col md={4}><Items/></Col>
      <Col md={4}><Items/></Col>
    </Row>
    </Grid>
 )

 export default ItemGrid