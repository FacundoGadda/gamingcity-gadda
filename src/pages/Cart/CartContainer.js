import React from "react"

import { Container, Col, Row } from "reactstrap"

import Layout from "../../components/Layout/Layout"
import Cart from "../../components/Cart/Cart"

import { AnimatePresence, motion } from "framer-motion"
const CartContainer = () => {
  return (
    <Layout>
      <Container fluid="lg" className="p-12" style={{ maxWidth: 800 }}>
        <Row>
          <Col xs={12}>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 2 }}
                exit={{ opacity: 0 }}
              >
                <Cart />
              </motion.div>
            </AnimatePresence>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default CartContainer
