import { useContext } from "react"
import React, { useState, useEffect } from "react"
import contexto from "../provider/CartContext"
import CartItem from "./CartItem"
import { Link } from "react-router-dom"


import "firebase/firestore"


const Cart = () =>{

    const {carrito, eliminarCarrito, orden, numeroCompra} = useContext(contexto)
    const [totalPrice, setTotalPrice] = useState(0);



    


    const mensaje = (
        <div>
          <div>No se encontraron elementos!</div>
          <div >
            <h2 >¡Tu carrito está vacío!</h2>

            <Link to="/">Ir a comprar</Link>
          </div>

        </div>
      )




    useEffect(() => {
        if (carrito.length > 0) {
          setTotalPrice(
            carrito
              .map((product) => product.price * product.cantidad)
              .reduce((total, valor) => total + valor)
          )
        }
      }, [carrito]);



    return(
        <div className="contBoton">
                    {carrito.length === 0 ? (
        mensaje
      ) : (
        <div className="contenedorProduc">


            {carrito.map (carrito=>{

             return <CartItem key={carrito.id} carrito={carrito}/>
             })}
             
         
        </div>
        )}
        <h5 >Total: ${totalPrice}</h5>
        <br></br>
        <br></br>

        <Link to="/cart"><button onClick={eliminarCarrito}>Eliminar carrito</button></Link> 
        <Link to="/CartConfirmacion"><button onClick={orden}>Confirmar Carrito</button></Link>  
        </div>
    )

  
    
    
}

export default Cart