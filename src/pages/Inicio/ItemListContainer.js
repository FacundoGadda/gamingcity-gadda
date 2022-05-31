import { useState, useEffect } from "react"

import { Container } from "reactstrap"
import { useParams } from "react-router-dom"

import ItemList from "../../components/ItemList/ItemList"
import Layout from "../../components/Layout/Layout"
import { catalogFilter, categoryFilter } from "../../helpers/general_helpers"
import { getProducts } from "../../services/api"

import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useCartContext } from "../../context/CartContext"

const ItemListContainer = () => {
  const { id } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const { init, initApp } = useCartContext()

  useEffect(() => {
    getProducts()
      .then((res) => {
        if (id) {
          setProducts(categoryFilter(res.results, id))
        } else {
          setProducts(catalogFilter(res.results))
        }
      })
      .finally(() => { 
        setLoading(false)
        initApp()
      })
    if (init) {
      setLoading(true)
    }
  }, [id])

  // useEffect(() => {
  //   const db = getFirestore()
  //   const dbQuery = doc(db, 'items', 'PGPG67gRV0yqOf6MacMM')
  //   getDoc(dbQuery).then((res) => console.log(res))
  // }, [])

  return (
    <Layout>
      <Container fluid="lg">
        <ItemList {...{ products, loading }} />
      </Container>
    </Layout>
  )
}

export default ItemListContainer
