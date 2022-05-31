import React, { useState } from "react"

import { Row, Col } from "reactstrap"
import { useMediaQuery } from "react-responsive"

import ItemCount from "../ItemCount/ItemCount"
import { formatPrice, checkStock } from "../../helpers/general_helpers"
import { useCartContext } from "../../context/CartContext"

import classname from "classnames"
import { AnimatePresence, motion } from "framer-motion"

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
      style={{ padding: isBigScreen ? "40px 90px" : 40 }}
    >
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 2 }}
          exit={{ opacity: 0 }}
        >
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
                  width={250}
                  height={250}
                  style={{ objectFit: "contain" }}
                  alt="product"
                />
              </div>
              <div className="mt-4 d-flex justify-content-center">
                <Col style={{ maxWidth: 300 }}>
                  <ItemCount
                    initial={1}
                    stock={checkStock(item.id, available_quantity, cartList)}
                    item={item}
                  />
                </Col>
              </div>
            </Col>
          </Row>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default ItemDetail
