import { useContext } from "react"
import contexto from "../provider/CartContext"
import CartItem from "./CartItem"
const Cart = () =>{


    const {carrito} = useContext(contexto)

     
    return(
        <div>

            {carrito.map (carrito=>{

             return <CartItem key={carrito.id} carrito={carrito}/>
             })}        
        </div>
    )

  
    
    
}

export default Cart