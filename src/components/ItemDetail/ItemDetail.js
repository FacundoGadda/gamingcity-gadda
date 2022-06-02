import React, { useState } from "react"

import { Row, Col } from "reactstrap"
import { useMediaQuery } from "react-responsive"

import ItemCount from "../ItemCount/ItemCount"
import Animate from "../Motion/Animate"
import { formatPrice, checkStock } from "../../helpers/general_helpers"
import { useCartContext } from "../../context/CartContext"

import classname from "classnames"

import "./itemDetail.scss"

const ItemDetail = ({ item }) => {
  const { name, short_description, pictures, buy_box_winner } = item
  const { price, available_quantity } = buy_box_winner ?? ""
  const description = short_description?.content

  const { cartList } = useCartContext()

  const [isReadMore, setIsReadMore] = useState(true)
  const toggleReadMore = () => setIsReadMore(!isReadMore)

  const isBigScreen = useMediaQuery({ minWidth: 768 })

  return (
    <div
      className="bg-white box-shadow-detail"
      style={{ padding: isBigScreen ? "40px 80px" : 40 }}
    >
      <Animate>
        <Row className="d-flex align-items-center justify-content-center">
          <Col sm={12}>
            <div>
              <div className="fw-bold">{name}</div>
              <h5 className="my-4">{formatPrice(price)}</h5>
              <p
                className={classname("mb-0", {
                  "text-ellipsis-detail": isReadMore,
                })}
              >
                {isReadMore ? description?.slice(0, 350) : description}
              </p>
              <span
                className="mt-2 fs-13 text-decoration-underline"
                role="button"
                onClick={toggleReadMore}
              >
                {isReadMore ? "Leer más" : "Ocultar"}
              </span>
            </div>
          </Col>
          <Col>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <img
                src={pictures?.[0].url}
                width={200}
                height={200}
                style={{ objectFit: "contain" }}
                alt="product"
              />
            </div>
            <div className="mt-2">
              <Col className="d-flex flex-column align-items-center justify-content-center">
                <ItemCount
                  initial={1}
                  stock={checkStock(item.id, available_quantity, cartList)}
                  item={item}
                />
              </Col>
            </div>
          </Col>
        </Row>
      </Animate>
    </div>
  )
}

export default ItemDetail
