import ItemList from "./ItemList"
import {useEffect} from "react"
import {useState} from "react"
import {u} from "./Productos"
const ItemListContainer = ({greeting}) => {

  const [itemsP,setItemsP] = useState([])


  useEffect(() => {

    const operacion = new Promise((res,rej) => {
  
        setTimeout(() => {
          res(u)
              
        }, 2000)
      
      })
      
      operacion.then((itemsP) => setItemsP (u))
      
      operacion.catch(() => {
          console.log("termino todo mal!!! ;(")
          })
  
  },[])

    

      return(
        <>  
          <div>
          <p>{greeting}</p>
          </div>
          <ItemList itemsP={itemsP}/>
      </>  
      )
  }

  export default ItemListContainer