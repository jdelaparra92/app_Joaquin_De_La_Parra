import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
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