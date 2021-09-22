import React from "react"
import Item from "./Item"
const ItemList = ({itemsP}) => {

    return(
        <section className="productos-contenedor">
        
            {itemsP.map (itemsP=>{
                return <Item items={itemsP}/>
            })}
        
        </section>
    )
}

export default ItemList