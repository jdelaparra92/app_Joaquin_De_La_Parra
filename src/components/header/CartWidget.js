import carrito from "./../../img/107831.png"
import { Link } from "react-router-dom"
const CartWidget = () => 
<div>
<Link className="link_logo" to="/cart"><img className="carrito" src={carrito} alt=""></img></Link>
</div>
export default CartWidget