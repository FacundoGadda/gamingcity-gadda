import React from "react"

import { Container, Col, Row } from "reactstrap"

import Layout from "../../components/Layout/Layout"
import Cart from "../../components/Cart/Cart"
import Animate from "../../components/Motion/Animate"

const CartContainer = () => {
  return (
    <Layout>
      <Container fluid="lg" className="p-12" style={{ maxWidth: 800 }}>
        <Row>
          <Col xs={12}>
            <Animate>
              <Cart />
            </Animate>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default CartContainer
