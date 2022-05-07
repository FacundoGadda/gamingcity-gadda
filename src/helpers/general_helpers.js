export const formatPrice = (value) => {
  return value.toLocaleString("es-ar", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  })
}
