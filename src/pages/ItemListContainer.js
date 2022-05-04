import React from "react";

import { Container, Col, Row } from "reactstrap";
import ItemCount from "../components/ItemCount";

const ItemListContainer = ({ greeting }) => {
  return (
    <Container fluid="lg">
      <h4 className="my-3">{greeting}</h4>
      <Row>
        <Col xs={6} md={4} lg={3}>
          <ItemCount initial={1} stock={5} />
        </Col>
        <Col xs={6} md={4} lg={3}>
          <ItemCount initial={0} stock={0} />
        </Col>
      </Row>
    </Container>
  );
};

export default ItemListContainer;
