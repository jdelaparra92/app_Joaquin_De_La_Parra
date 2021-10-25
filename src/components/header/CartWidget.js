import carrito from "./../../img/107831.png"
import { Link } from "react-router-dom"
import { useContext } from "react"
import contexto from "../provider/CartContext"
const CartWidget = () => {

    const {cantProd} = useContext(contexto)
    
    return(
        <div>
        <Link className="link_logo" to="/cart"><img className="carrito" src={carrito} alt=""></img></Link>
        <p> cantidad:{cantProd}</p>
        </div>
    )

}

export default CartWidget