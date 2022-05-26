import { formatPrice } from "../../helpers/general_helpers";

import { Link } from "react-router-dom";
import "./item.scss";

const Item = ({ item }) => {
  const { catalog_product_id, title, price, thumbnail } = item;

  return (
    <Link to={`/item/${catalog_product_id}`} className="text-decoration-none">
      <div className="bg-white overflow-hidden item-box-shadow">
        <div className="d-flex justify-content-center">
          <img
            src={thumbnail}
            alt="producto"
            className="p-3"
            style={{ maxWidth: 240, height: 130, objectFit: "cover" }}
          />
        </div>
        <hr className="my-0 mx-2 text-muted" />
        <div className="px-4 py-3">
          <h5>{formatPrice(price)}</h5>
          <p className="text-ellipsis mb-2">{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
