import React, { useState } from "react"
import { Link } from "react-router-dom"

import { AiOutlineDelete } from "react-icons/ai"
import { Button } from "reactstrap"
import { useCartContext } from "../../context/CartContext"

import {
  formatPrice,
  sumQuantity,
  sumTotal,
} from "../../helpers/general_helpers"

import Empty from "./Empty"

import Purchase from "../Cart/Purchase"
import Animate from "../Motion/Animate"

const Cart = () => {
  const [modal, setModal] = useState(false)
  const { cartList, removeItem, clear } = useCartContext()

  const toggle = () => setModal(!modal)

  return (
    <>
      <div className="bg-white p-3 py-sm-4 px-sm-5">
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ marginBottom: 35 }}
        >
          <p className="mb-0 text-cyan bg-secondary fw-bold px-3 py-1 rounded-3">
            Carrito ({sumQuantity(cartList)} item/s)
          </p>
          {!!cartList.length && (
            <Button size="sm" onClick={() => clear()}>
              <p className="mb-0">Vaciar</p>
            </Button>
          )}
        </div>
        <div className="d-flex flex-column gap-4 justify-content-center">
          {!cartList.length ? (
            <Animate>
              <Empty />
            </Animate>
          ) : (
            <>
              {cartList.map((item, i) => (
                <div className="d-flex align-items-center w-100" key={i}>
                  <div className="d-flex align-items-center w-75">
                    <Link
                      to={`/item/${item.id}`}
                      className="text-decoration-none"
                    >
                      <img
                        src={item.pictures?.[0].url}
                        alt={item.name}
                        width={60}
                        height={60}
                        style={{ objectFit: "contain" }}
                      />
                    </Link>
                    <Link
                      to={`/item/${item.id}`}
                      className="mx-4 text-decoration-none"
                    >
                      <p className="mb-0 text-ellipsis">{item.name}</p>
                      <small className="text-muted">
                        Cantidad: <strong>{item.quantity}</strong>
                      </small>
                    </Link>
                  </div>
                  <div className="w-25 d-flex align-items-center justify-content-between">
                    <div>
                      <h5 className="ms-2 mb-0">
                        {formatPrice(item.price * item.quantity)}
                      </h5>
                    </div>
                    <Button
                      className="shadow-none"
                      onClick={() => removeItem(item.id)}
                    >
                      <AiOutlineDelete />
                    </Button>
                  </div>
                </div>
              ))}
              <hr className="my-0" />
              <div className="d-flex justify-content-between align-items-center">
                <h6>Total</h6>
                <h6>{formatPrice(sumTotal(cartList))}</h6>
              </div>
              <hr className="my-0" />
              <div className="text-center">
                <Button
                  color="cyan text-white"
                  className="shadow-none"
                  onClick={toggle}
                >
                  Comprar ahora
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      <Purchase toggle={toggle} modal={modal} />
    </>
  )
}

export default Cart
