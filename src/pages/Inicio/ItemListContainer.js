import { useState, useEffect } from "react"

import { Container } from "reactstrap"

import ItemList from "./ItemList"
import { data } from "./products"

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000)
  })

  useEffect(() => {
    getProducts
      .then((res) => {
        setProducts(res)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setLoading(false))
    setLoading(true)
    
  // eslint-disable-next-line
  }, [])

  return (
    <Container fluid="lg">
      <ItemList {...{ products, loading }} />
    </Container>
  );
};

export default ItemListContainer;
