import React, { useState, createContext, useContext } from "react"

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([])
  const [init, setInit] = useState(true)

  const addToCart = (item, quantity) => {
    const { name, id, buy_box_winner, pictures } = item
    const { price } = buy_box_winner ?? ""

    const ids = cartList.map(({ id }) => id)

    if (ids.includes(id)) {
      const newCartList = cartList.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + quantity } : item
      )
      setCartList(newCartList)
    } else {
      setCartList([...cartList, { name, id, price, quantity, pictures }])
    }
  }

  const removeItem = (id) => {
    setCartList(cartList.filter((item) => item.id !== id))
  }

  const clear = () => {
    setCartList([])
  }

  const initApp = () => {
    setInit(false)
  }

  return (
    <CartContext.Provider
      value={{ cartList, init, initApp, addToCart, clear, removeItem }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
