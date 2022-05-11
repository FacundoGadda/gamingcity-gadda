import { Row, Col } from "reactstrap";

import Item from "./Item";
import SkeletonItem from "../Skeletons/Item";

const ItemList = ({ products, loading }) => {
  return (
    <Row style={{ marginTop: 35, marginBottom: 35 }}>
      {loading
        ? [...Array(4)].map((_, id) => (
            <Col key={id} xs={12} sm={6} md={4} lg={3} style={{ padding: 12 }}>
              <SkeletonItem />
            </Col>
          ))
        : products.slice(0,8).map((item, id) => (
            <Col key={id} xs={12} sm={6} md={4} lg={3} style={{ padding: 12 }}>
              <Item item={item} />
            </Col>
          ))}
    </Row>
  );
};

export default ItemList;
