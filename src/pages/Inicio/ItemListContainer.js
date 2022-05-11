import { useState, useEffect } from "react"

import { Container } from "reactstrap"

import ItemList from "./ItemList"

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=notebooks')
      .then(res => res.json())
      .then(res => setProducts(res.results))
      .finally(() => setLoading(false))
    setLoading(true)
  }, [])

  return (
    <Container fluid="lg">
      <ItemList {...{ products, loading }} />
    </Container>
  );
};

export default ItemListContainer;
