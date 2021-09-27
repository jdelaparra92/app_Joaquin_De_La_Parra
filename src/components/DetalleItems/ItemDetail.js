import React from "react"



const ItemDetail = ({itemsP}) => {
    console.log(itemsP)

return(

    <div>
     <h2>{itemsP.title}</h2>
     <h3>{itemsP.price}</h3> 
     <h4>{itemsP.description}</h4>  
     <img className="carrito" src={itemsP.pictureUrl} alt=""></img>
    </div>

)

}

export default ItemDetail