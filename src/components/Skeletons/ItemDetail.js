import { Row, Col } from "reactstrap";
import { useMediaQuery } from "react-responsive";

import Skeleton from "react-loading-skeleton";

const ItemDetail = () => {
  const isBigScreen = useMediaQuery({ minWidth: 768 });

  return (
    <div
      className="bg-white box-shadow-detail"
      style={{ padding: isBigScreen ? "40px 90px" : 40 }}
    >
      <Row className="align-middle">
        <Col sm={12}>
          <div className="">
            <Skeleton count={2} height={18} />
            <h5 className="my-4">
              <Skeleton width={120} height={25} />
            </h5>
            <p>
              <Skeleton height={12} count={3} />
            </p>
          </div>
        </Col>
        <Col className="text-center my-4">
          <Skeleton width={230} height={200} />
        </Col>
      </Row>
    </div>
  );
};

export default ItemDetail;
