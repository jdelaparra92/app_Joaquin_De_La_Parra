import React from "react"
import ItemCount from "../contador/ItemCount"
import { Link } from "react-router-dom"

const onAdd = (cantidad) => {
    console.log(cantidad)
   }
const Item = ({items}) => {

return(

    <div>
     <h2>{items.title}</h2> 

      <button>
      <Link to={`/item/${items.id}`}>ver detalle</Link>
      </button>
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </div>

)

}

export default Item