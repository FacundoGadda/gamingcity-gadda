import { useState, useEffect } from "react"

import { Container } from "reactstrap"
import { useParams } from "react-router-dom"
import Helmet from "react-helmet"

import ItemList from "../../components/ItemList/ItemList"
import Layout from "../../components/Layout/Layout"

import { getProducts, getProductsByCategory } from "../../services/api"

const ItemListContainer = () => {
  const { id } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const helmetObject = {
    MLA1652: "Notebooks",
    MLA1672: "Almacenamiento",
    MLA14407: "Monitores",
    undefined: "Gaming City",
  }

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
    <div>
      <Helmet>
        <title>{helmetObject[id]}</title>
      </Helmet>
      <Layout>
        <Container fluid="lg">
          <ItemList {...{ products, loading }} />
        </Container>
      </Layout>
    </div>
  )
}

export default ItemListContainer
