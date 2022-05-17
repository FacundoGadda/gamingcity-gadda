import { useState, useEffect } from "react";

import { Container } from "reactstrap";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";
import Layout from "../../components/Layout/Layout";
import { catalogFilter, categoryFilter } from "../../helpers/general_helpers";
import { getProducts } from "../../services/api";

const ItemListContainer = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => {
        if (id) {
          setProducts(categoryFilter(res.results, id))
        } else {
          setProducts(catalogFilter(res.results))
        }
      })
  }, [id]);

  return (
    <Layout>
      <Container fluid="lg">
        <ItemList {...{ products }} />
      </Container>
    </Layout>
  );
};

export default ItemListContainer;
