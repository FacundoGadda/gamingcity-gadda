import { Row, Col } from "reactstrap"

import Item from "../Item/Item"
import SkeletonItem from "../Skeletons/Item"

const ItemList = ({ products, loading }) => {
  return (
    <Row>
      {loading
        ? [...Array(8)].map((_, id) => (
            <Col key={id} xs={12} sm={6} md={4} lg={3} className="p-12">
              <SkeletonItem />
            </Col>
          ))
        : products.map((item, id) => (
            <Col key={id} xs={12} sm={6} md={4} lg={3} className="p-12">
              <Item item={item} />
            </Col>
          ))}
    </Row>
  )
}

export default ItemList
