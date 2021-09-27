import ItemDetailContainer from "./components/DetalleItems/ItemDetailContainer"
import NavBar from "./components/header/NavBar"
import ItemListContainer from "./components/ListaItems/ItemListContainer"
import "./css/styles.css"

const App = () => {
    
    return(
        <>
        <NavBar/>
        <ItemListContainer greeting= "Hola soy el ItemListContainer"/>
        <ItemDetailContainer/>
        </>
    )
}

export default App