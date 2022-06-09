import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import ItemListContainer from "./pages/Home/ItemListContainer"
import ItemDetailContainer from "./pages/ProductDetail/ItemDetailContainer"
import Cart from "./pages/Cart/CartContainer"
import Error from "./pages/Error/Page404"

import NavBar from "./components/Navbar/NavBar"
import CartContextProvider from "./context/CartContext"

import "./index.scss"

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/404" element={<Error />} />
          <Route path='*' element={<Navigate to="/404" replace />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
