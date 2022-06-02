export const formatPrice = (value = "") => {
  return value.toLocaleString("es-ar", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  })
}

export const sumTotal = (cartList) => {
  return cartList.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)
}

export const checkStock = (id, quantity, cartList) => {
  const ids = cartList.map(({ id }) => id)

  if (ids.includes(id)) {
    const quant = cartList.find((item) => item.id === id)?.quantity

    return Math.abs(quant - quantity)
  } else {
    return quantity
  }
}

export const sumQuantity = cartList => {
  return cartList.map(({ quantity }) => quantity).reduce((pv, cv) => pv + cv, 0)
}
