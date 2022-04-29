import NavBar from "./components/NavBar";
import ItemListContainer from "./pages/ItemListContainer";

import './index.scss'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Sitio en construcción.." />
    </>
  );
}

export default App;
