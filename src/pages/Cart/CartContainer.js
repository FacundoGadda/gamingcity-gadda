import { Container, Col, Row } from "reactstrap"
import Helmet from "react-helmet"

import Layout from "../../components/Layout/Layout"
import Cart from "../../components/Cart/Cart"
import Animate from "../../components/Motion/Animate"

const CartContainer = () => {
  return (
    <div>
      <Helmet>
        <title>Carrito</title>
      </Helmet>
      <Layout>
        <Container fluid="lg" className="mw-800">
          <Row>
            <Col xs={12}>
              <Animate>
                <Cart />
              </Animate>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  )
}

export default CartContainer
