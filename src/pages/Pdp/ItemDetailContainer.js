import { useState, useEffect } from "react"

import { Container } from "reactstrap"
import { useParams } from "react-router-dom"

import ItemDetailSkeleton from "../../components/Skeletons/ItemDetail"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import Layout from "../../components/Layout/Layout"
import { getProductById } from "../../services/api"

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProductById(id)
      .then(setItem)
      .catch((err) => console.log(err))
      .finally(setLoading)
    //eslint-disable-next-line
  }, [])

  return (
    <Layout>
      <Container className="mw-800">
        {loading ? <ItemDetailSkeleton /> : <ItemDetail {...{ item }} />}
      </Container>
    </Layout>
  )
}

export default ItemDetailContainer
