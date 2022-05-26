import React from "react"
import { Button } from "reactstrap"
import { Link } from "react-router-dom"

import empty from "../../assets/illustrations/empty-cart.svg"

const Empty = () => {
  return (
    <div className="d-flex flex-column w-100 align-items-center gap-3">
      <img src={empty} style={{ width: 200 }} alt="empty" />
      <div className="text-center">
        <h4 className="text-muted mt-4 mb-1">El carrito está vacío</h4>
        <p className="text-muted mb-0">
          No tienes ningún item en tu carro de compras.
        </p>
        <Link to="/" className="text-decoration-none shadow-none">
          <Button className="mt-3">Seguir navegando</Button>
        </Link>
      </div>
    </div>
  )
}

export default Empty
