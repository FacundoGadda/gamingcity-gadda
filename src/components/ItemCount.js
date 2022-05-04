import React, { useState, useEffect } from "react";

import { Button } from "reactstrap";
import classname from "classnames";

import teclado from "../assets/teclado.jpg";

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  const [disabledAdd, setDisabledAdd] = useState(false);
  const [disabledLess, setDisabledLess] = useState(false);

  useEffect(() => {
    count === stock ? setDisabledAdd(true) : setDisabledAdd(false)
    count === 1 ? setDisabledLess(true) : setDisabledLess(false)

    if (stock === 0) {
      setDisabledAdd(true);
      setDisabledLess(true);
    }
    // eslint-disable-next-line
  }, [count]);

  const message = {
    1: "Se agregó una unidad",
    default: `Se agregaron ${count} unidades`,
  };

  const onAdd = () => {
    console.log(message[count] || message.default);
  };

  return (
    <div className="bg-white overflow-hidden">
      <div className="d-flex justify-content-center">
        <img src={teclado} alt="teclado" style={{ maxWidth: 240 }} />
      </div>
      <hr className="my-0 mx-2 text-muted" />
      <div className="px-4 py-3">
        <p className="mb-3">Teclado bluetooth Logitech K380</p>
        <div className="d-flex justify-content-between align-items-center bg-secondary">
          <Button
            onClick={() => setCount(count - 1)}
            disabled={disabledLess}
            className="shadow-none"
          >
            <span className={classname({ "text-muted": disabledLess })}>-</span>
          </Button>
          <h6 className="mb-0">{count}</h6>
          <Button
            onClick={() => setCount(count + 1)}
            disabled={disabledAdd}
            className="shadow-none"
          >
            <span className={classname({ "text-muted": disabledAdd })}>+</span>
          </Button>
        </div>
        <div className="mt-3">
          {stock === 0 ? (
            <div className="d-flex align-items-center justify-content-center">
              <p className="text-muted mb-1">Artículo no disponible</p>
            </div>
          ) : (
            <Button
              onClick={onAdd}
              color="cyan"
              className="w-100 rounded-3 mb-2 outlined shadow-none"
              outline
            >
              <p className="mb-0 fw-500">Agregar al carrito</p>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
