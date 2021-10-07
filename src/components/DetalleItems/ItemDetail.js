import React from "react"
import ItemCount from "../contador/ItemCount"
import { useContext } from "react"
import contexto from "../provider/CartContext"


const ItemDetail = ({itemsP}) => {
    console.log(itemsP)
    const {addItem} = useContext(contexto)


    const onAdd = (cantidad) => {
        console.log("Recibi la cantidad de un componente hijo")
        console.log(cantidad)
        addItem(itemsP,cantidad)
    }


return(

    <div>
     <h2>{itemsP.title}</h2>
     <h3>{itemsP.price}</h3> 
     <h4>{itemsP.description}</h4>  
     <img className="carrito" src={itemsP.pictureUrl} alt=""></img>
     <ItemCount stock={itemsP.stock} initial={itemsP.stock >= 1 ? 1 : 0} onAdd={onAdd}/>
    </div>

)

}

export default ItemDetail