import { useState, useEffect } from "react"

import { Container } from "reactstrap"

import { useParams } from "react-router-dom"

import ItemDetailSkeleton from "../../components/Skeletons/ItemDetail"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import Layout from "../../components/Layout/Layout"

const ItemListContainer = () => {
  const { id } = useParams()
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setItem(res))
      .finally(() => setLoading(false))
    setLoading(true)
  }, [id])

  return (
    <Layout>
      <Container className="p-12" style={{ maxWidth: 800 }}>
        {loading ? (
          <ItemDetailSkeleton />
        ) : (
              <ItemDetail item={item} />
        )}
      </Container>
    </Layout>
  )
}

export default ItemListContainer
