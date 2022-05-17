import { id_categories } from "../data/data";

export const formatPrice = (value = "") => {
  return value.toLocaleString("es-ar", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  });
};

export const categoryFilter = (products, id) => {
  return products
    .filter((item) => item.catalog_listing === true)
    .filter((item) => item.category_id === id)
};

export const catalogFilter = (products) => {
  return products
    .filter((item) => item.catalog_listing === true)
    .filter((item) => id_categories.includes(item.category_id))
};
