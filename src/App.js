import NavBar from "./components/NavBar";
import ItemListContainer from "./pages/Inicio/ItemListContainer";
import ItemDetailContainer from "./pages/Pdp/ItemDetailContainer";
import './index.scss'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
    </>
  );
}

export default App;
