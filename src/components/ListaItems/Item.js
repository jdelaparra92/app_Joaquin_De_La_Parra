import React from "react"
import { Link } from "react-router-dom"


const Item = ({items}) => {

return(

    <div>
     <h2>{items.title}</h2> 

      <button>
      <Link to={`/item/${items.id}`}>ver detalle</Link>
      </button>
    </div>

)

}

export default Item