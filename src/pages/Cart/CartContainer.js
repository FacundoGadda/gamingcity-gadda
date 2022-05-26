import React from "react"

import { Container, Col, Row } from "reactstrap"

import Layout from "../../components/Layout/Layout"
import Cart from "../../components/Cart/Cart"

const CartContainer = () => {
  return (
    <Layout>
      <Container fluid="lg" className="p-12" style={{ maxWidth: 800 }}>
        <Row>
          <Col xs={12}>
            <Cart />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default CartContainer
