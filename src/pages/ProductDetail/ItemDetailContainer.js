import { useState, useEffect } from "react"

import { Container } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"
import Helmet from "react-helmet"

import ItemDetailSkeleton from "../../components/Skeletons/ItemDetail"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import Layout from "../../components/Layout/Layout"
import { getProductById } from "../../services/api"

const ItemDetailContainer = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProductById(id)
      .then(setItem)
      .catch((err) => console.log("error to get product => ", err))
      .finally(setLoading)
    //eslint-disable-next-line
  }, [])

  if (item === undefined) {
    return navigate("/404")
  }

  return (
    <div>
      <Helmet>
        <title>{item.name}</title>
      </Helmet>
    <Layout>
      <Container className="mw-800">
        {loading ? <ItemDetailSkeleton /> : <ItemDetail {...{ item }} />}
      </Container>
    </Layout>
    </div>
  )
}

export default ItemDetailContainer
