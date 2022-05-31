import { useState } from "react"
import { formatPrice } from "../../helpers/general_helpers"

import { BiCart } from "react-icons/bi"
import { Link } from "react-router-dom"

import "./item.scss"

const Item = ({ item }) => {
  const { catalog_product_id, title, price, thumbnail } = item
  const [show, setShow] = useState(false)

  return (
    <Link to={`/item/${catalog_product_id}`} className="text-decoration-none">
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <div className="bg-white overflow-hidden item-box-shadow">
          <div className="d-flex justify-content-center">
            <img
              src={thumbnail}
              alt="producto"
              className="p-3"
              style={{ maxWidth: 240, height: 130, objectFit: "cover" }}
            />
          </div>
          <div>
            <hr className="my-0 mx-2 text-muted" />
            {show && (
              <div className="position-relative" style={{ height: "100%" }}>
                <div className="ui-item__shipping">
                  <div className="d-flex justify-content-center">
                    <span className="my-auto">
                      <BiCart color="green" className="mt-1 p-0" size={18} />
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="px-4 py-3">
            <h5>{formatPrice(price)}</h5>
            <p className="text-ellipsis fw-300 mb-2">{title}</p>
          </div>
          {/* {show && <p className="fw-500 my-4">TEST!</p>} */}
        </div>
      </div>
    </Link>
  )
}

export default Item
