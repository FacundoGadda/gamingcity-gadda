import { useState, useEffect } from "react";

import { Container } from "reactstrap";

import { useParams } from "react-router-dom";

import ItemDetailSkeleton from "../../components/Skeletons/ItemDetail";
import ItemDetail from "../../components/ItemDetail/ItemDetail"

import Layout from "../../components/Layout/Layout";

const ItemListContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setItem(res))
      .finally(() => setLoading(false))
    setLoading(true);
  }, [id]);

  const onAdd = (count, setQuantity) => {
    setQuantity(count)
  };

  return (
    <Layout>
      <Container fluid="lg" className="p-12">
        {loading ? <ItemDetailSkeleton /> : <ItemDetail item={item} onAdd={onAdd} />}
      </Container>
    </Layout>
  );
};

export default ItemListContainer;
