import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from "./components/Navbar/NavBar"
import ItemListContainer from "./pages/Inicio/ItemListContainer"
import ItemDetailContainer from "./pages/Pdp/ItemDetailContainer"
import Cart from "./pages/Cart/CartContainer"

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
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
