import React, { useState } from "react";

import { Row, Col } from "reactstrap";
import { useMediaQuery } from "react-responsive";

import { formatPrice } from "../../helpers/general_helpers";

import classname from "classnames";

import "./itemDetail.scss";

const ItemDetail = ({ item }) => {
  const { name, short_description, pictures, buy_box_winner } = item

  const description = short_description?.content;
  const price = buy_box_winner?.price;

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => setIsReadMore(!isReadMore);

  const isBigScreen = useMediaQuery({ minWidth: 768 });

  return (
    <div className="bg-white" style={{ padding: isBigScreen ? 90 : 40 }}>
      <Row className="d-flex align-items-center">
        <Col sm={12} xl={6}>
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
          <div className="d-flex justify-content-center mt-4 mt-xl-0">
            <img
              src={pictures?.[0].url}
              width={250}
              style={{ objectFit: "cover" }}
              alt="product"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ItemDetail;
