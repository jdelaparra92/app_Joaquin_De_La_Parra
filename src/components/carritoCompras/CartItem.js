import React from "react"

const CartItem = ({carrito}) => {



return(

    <div>
     <h2>{carrito.title}</h2>
     <h3>{carrito.price}</h3> 
     <h4>{carrito.description}</h4>  
     <img className="carrito" src={carrito.pictureUrl} alt=""></img>
    </div>

)

}

export default CartItem