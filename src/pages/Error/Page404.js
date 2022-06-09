import React from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col } from "reactstrap"

import Layout from "../../components/Layout/Layout"
import error from "../../assets/illustrations/error-img.png"

const Page404 = () => {
  return (
    <Layout>
      <div className="bg-white">
        <Container>
          <Row>
            <Col lg="12">
              <div className="text-center mb-5">
                <h1 className="display-2 font-weight-medium fw-bold text-primary">
                  404
                </h1>
                <h4 className="text-uppercase">Página no encontrada</h4>
                <div className="mt-5 text-center">
                  <Link
                    className="btn btn-primary "
                    to="/"
                  >
                    Volver al inicio
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md="7" xl="5">
              <div>
                <img src={error} alt="" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default Page404;
