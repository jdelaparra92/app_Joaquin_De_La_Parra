import { useContext } from "react"
import React, { useState, useEffect } from "react"
import contexto from "../provider/CartContext"
import { Link } from "react-router-dom"

const CartConfirmacion = () => {

    const {numeroCompra} = useContext(contexto)

    return(
      <div className="confirmacion">
       
       <h1>TU PEDIDO FUE REALIZADO CON EXITO!!!</h1>
       <br></br>
       <h2>Numero de pedido: {numeroCompra}</h2>

       <Link to="/">Volver al Home</Link>

      </div>
    )
}

export default CartConfirmacion