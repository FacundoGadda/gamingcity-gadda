import { useState, useEffect } from "react"

import { Container } from "reactstrap"

import ItemDetailSkeleton from "../Skeletons/ItemDetail"
import ItemDetail from "./ItemDetail"

const ItemListContainer = () => {
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch("https://api.mercadolibre.com/products/MLA18648558")
      .then((res) => res.json())
      .then((res) => setItem(res))
      .finally(() => setLoading(false))
    setLoading(true)
  }, [])

  return (
    <Container fluid="lg">
      {loading ? <ItemDetailSkeleton /> : <ItemDetail item={item} />}
    </Container>
  );
};

export default ItemListContainer;
