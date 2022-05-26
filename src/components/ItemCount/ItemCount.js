import { useState } from "react"

import { Button } from "reactstrap"
import classname from "classnames"
import { Link } from "react-router-dom"

import { useCartContext } from "../../context/CartContext"

const ItemCount = ({ stock, initial, item }) => {
  const [count, setCount] = useState(stock === 0 ? 0 : initial)
  const [click, setClick] = useState(false)

  const { addToCart } = useCartContext()

  return (
    <>
      {click || stock === 0 ? (
        <div className="d-flex justify-content-evenly gap-2">
          <Link to="/cart">
            <Button
              color="cyan"
              className="w-100 rounded-3 mb-2 outlined shadow-none"
              outline
            >
              Ir al carrito
            </Button>
          </Link>
          <Link to="/">
            <Button>Seguir navegando</Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-between align-items-center bg-secondary">
            <Button
              onClick={() => setCount(count - 1)}
              disabled={count === 1 || stock === 0}
              className="shadow-none"
            >
              <span className={classname({ "text-muted": count === 1 })}>
                -
              </span>
            </Button>
            <h6 className="mb-0">{count}</h6>
            <Button
              onClick={() => setCount(count + 1)}
              disabled={count === stock || stock === 0}
              className="shadow-none"
            >
              <span className={classname({ "text-muted": count === stock })}>
                +
              </span>
            </Button>
          </div>
          <div className="mt-3">
            <Button
              onClick={() => {
                addToCart(item, count)
                setClick(true)
              }}
              color="cyan"
              className="w-100 rounded-3 mb-2 outlined shadow-none"
              outline
            >
              <p className="mb-0 fw-500">Agregar al carrito</p>
            </Button>
          </div>
        </>
      )}
    </>
  )
}

export default ItemCount
