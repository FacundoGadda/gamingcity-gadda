import ItemCount from "./ItemCount"
import { formatPrice } from "../../helpers/general_helpers";

import "./item.scss"

const Item = ({ item }) => {
  const { title, price, thumbnail, stock } = item

  const onAdd = (count) => {
    if (count === 1) console.log("Se agregó una unidad")
    else console.log(`Se agregaron ${count} unidades`)
  };

  return (
    <div className="bg-white overflow-hidden">
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
        <p className="text-ellipsis">{title}</p>
        <ItemCount initial={1} stock={stock} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default Item;
