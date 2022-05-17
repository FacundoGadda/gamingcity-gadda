import React from "react";

import { Button, Badge } from "reactstrap";
import { BiCart } from "react-icons/bi";

const CartWidget = () => {
  return (
    <Button color="primary" onClick={e => console.log(e)}>
      <BiCart color="white" size={30} />
      <Badge color="primary">{""}</Badge>
    </Button>
  );
};

export default CartWidget;
