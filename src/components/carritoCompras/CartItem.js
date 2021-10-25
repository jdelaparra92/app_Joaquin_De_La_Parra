import React from "react"
import { useContext } from "react"
import contexto from "../provider/CartContext"

const CartItem = ({carrito}) => {

    const { deleteProduct } = useContext(contexto)




return(

    

    <div className="elementoCarrito">

        <div>
     <h2>Nombre: {carrito.title}</h2>
     <h3>Precio: {carrito.price}</h3> 
     <h4>Descripción: {carrito.description}</h4>  
     <img className="carrito" src={carrito.pictureUrl} alt=""></img>
     <h5>la cantidad del item elegido es de:{carrito.cantidad}</h5>
     <button onClick={() => deleteProduct()}> X borrar producto </button>
     <hr></hr>
        </div>

     
    </div>

)

}

export default CartItem