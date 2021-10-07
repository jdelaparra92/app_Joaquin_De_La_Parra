import ItemDetailContainer from "./components/DetalleItems/ItemDetailContainer"
import NavBar from "./components/header/NavBar"
import ItemListContainer from "./components/ListaItems/ItemListContainer"
import "./css/styles.css"
import { BrowserRouter , Route , Switch} from "react-router-dom"
import Cart from "./components/carritoCompras/Cart"
import { CustomProvider } from "./components/provider/CartContext"

const App = () => {

    return(
        <BrowserRouter>
        <CustomProvider>
        <NavBar/>


    <Switch>
        <Route path="/" component={ItemListContainer} exact/>
        <Route path="/cate/:id" component={ItemListContainer}/>
        <Route path="/item/:id" component={ItemDetailContainer}/>
        <Route path="/cart" component={Cart}/>
    </Switch>
    </CustomProvider>
        </BrowserRouter>
    )
}

export default App