import React from "react"
import { Link } from "react-router-dom"
import { Button } from "reactstrap"

import { useCartContext } from "../../context/CartContext"
import confirmation from "../../assets/illustrations/confirmation.svg"

const Success = ({ id }) => {
  const { clear } = useCartContext()
  
  return (
    <div className="d-flex flex-column w-100 align-items-center gap-3 pt-4 pb-3">
      <img src={confirmation} style={{ width: 200 }} alt="empty" />
      <div className="text-center">
        <h4 className="text-muted mt-4 mb-1">Orden creada con éxito</h4>
        <p className="text-muted mb-0">
          ID de tu compra: {id}
        </p>
        <Link to="/" className="text-decoration-none shadow-none">
          <Button className="mt-3" onClick={clear}>
            Volver al inicio
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Success
