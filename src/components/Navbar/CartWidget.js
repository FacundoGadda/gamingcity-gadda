import React from "react"

import { Button, Badge } from "reactstrap"
import { BiCart } from "react-icons/bi"

import { useCartContext } from "../../context/CartContext"

import { Link } from "react-router-dom"

const CartWidget = () => {
  const { cartList } = useCartContext()

  const total = cartList.map(({ quantity }) => quantity).reduce((pv, cv) => pv + cv, 0)

  return (
    <Link to="/cart">
      <Button color="primary" className="shadow-none">
        <BiCart color="white" size={30} />
        <Badge color="primary">
          {total === 0 ? "" : total}
        </Badge>
      </Button>
    </Link>
  )
}

export default CartWidget
