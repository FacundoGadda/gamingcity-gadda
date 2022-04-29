import React from "react";

import { Container } from "reactstrap";

const ItemListContainer = ({ greeting }) => {
  return (
    <Container fluid="lg">
      <h4 className="mt-3">{greeting}</h4>
    </Container>
  );
};

export default ItemListContainer;
