import { Row, Col } from "reactstrap";

import Item from "./Item";
import SkeletonItem from "../Skeletons/Item";

const ItemList = ({ products, loading }) => {
  return (
    <Row style={{ marginTop: 35 }}>
      {loading
        ? [...Array(4)].map((_, id) => (
            <Col key={id} xs={12} sm={6} md={4} lg={3}>
              <SkeletonItem />
            </Col>
          ))
        : products.map((item, id) => (
            <Col key={id} xs={12} sm={6} md={4} lg={3}>
              <Item item={item} />
            </Col>
          ))}
    </Row>
  );
};

export default ItemList;
