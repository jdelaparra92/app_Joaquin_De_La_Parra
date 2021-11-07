import React from "react"
import Item from "./Item"
const ItemList = ({itemsP}) => {

    return(
        <div>
            <h1 className="titulo1"> NUESTROS PRODUCTOS</h1>
        <section className="productos-contenedor">
           
            {itemsP.map (itemsP=>{

                return <Item key={itemsP.id} items={itemsP}/>
            })}
        
        </section>
        </div>
    )
}

export default ItemList