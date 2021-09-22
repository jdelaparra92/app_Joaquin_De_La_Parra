import NavBar from "./components/header/NavBar"
import ItemListContainer from "./components/productos/ItemListContainer"
import "./css/styles.css"

const App = () => {
    
    return(
        <>
        <NavBar/>
        <ItemListContainer greeting= "Hola soy el ItemListContainer"/>
        </>
    )
}

export default App