import { Row, Col } from "reactstrap"

import Item from "../Item/Item"
import SkeletonItem from "../Skeletons/Item"

import { motion, AnimatePresence } from "framer-motion"

const ItemList = ({ products, loading }) => {
  return (
    <Row>
      {loading ? (
        [...Array(8)].map((_, id) => (
          <Col key={id} xs={12} sm={6} md={4} lg={3} className="p-12">
            <SkeletonItem />
          </Col>
        ))
      ) : (
        <AnimatePresence>
          {products.map((item, id) => (
            <Col key={id} xs={12} sm={6} md={4} lg={3} className="p-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 2 }}
                exit={{ opacity: 0 }}
              >
                <Item item={item} />
              </motion.div>
            </Col>
          ))}
        </AnimatePresence>
      )}
    </Row>
  )
}

export default ItemList
