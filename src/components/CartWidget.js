import React from "react";

import { Button, Badge } from "reactstrap";
import { BiCart } from "react-icons/bi";

const CartWidget = () => {
  return (
    <Button onClick={e => console.log(e)}>
      <BiCart color="white" size={30} />
      <Badge>4</Badge>
    </Button>
  );
};

export default CartWidget;
