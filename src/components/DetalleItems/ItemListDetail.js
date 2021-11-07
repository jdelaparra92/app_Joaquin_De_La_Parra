import React from "react"
import ItemDetail from "./ItemDetail"

const ItemListDetail = ({itemsP}) => {

    return(
        <section className="productos-contenedor">
            {itemsP.map (itemsP=>{

                return <ItemDetail key={itemsP.id} itemsP={itemsP}/>
            })}
        
        </section>
    )
}

export default ItemListDetail