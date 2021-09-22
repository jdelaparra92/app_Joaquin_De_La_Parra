import React from "react"
import ItemCount from "./ItemCount"

const onAdd = (cantidad) => {
    console.log(cantidad)
   }
const Item = ({items}) => {

return(

    <div>
     <h2>{items.title}</h2> 

      <button>
       ver detalle
      </button>
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </div>

)

}

export default Item