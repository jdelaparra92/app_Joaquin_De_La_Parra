import React from "react"
import Item from "./Item"
const ItemList = ({itemsP}) => {

    return(
        <section className="productos-contenedor">
        
            {itemsP.map (itemsP=>{

                return <Item key={itemsP.id} items={itemsP}/>
            })}
        
        </section>
    )
}

export default ItemList