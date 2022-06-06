import { useState, useEffect } from "react"

import { Container } from "reactstrap"
import { useParams } from "react-router-dom"

import ItemList from "../../components/ItemList/ItemList"
import Layout from "../../components/Layout/Layout"

import { getProducts, getProductsByCategory } from "../../services/api"

const ItemListContainer = () => {
  const { id } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!id) {
      getProducts()
        .then(setProducts)
        .catch((err) => console.log(err))
        .finally(setLoading)
      setLoading(true)
    } else {
      getProductsByCategory(id)
        .then(setProducts)
        .catch((err) => console.log(err))
    }
  }, [id])

  return (
    <Layout>
      <Container fluid="lg">
        <ItemList {...{ products, loading }} />
      </Container>
    </Layout>
  )
}

export default ItemListContainer
