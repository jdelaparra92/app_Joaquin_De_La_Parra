import ItemListDetail from "./ItemListDetail"
import {useEffect} from "react"
import {useState} from "react"
import {u} from "../productos/ProductosLista"
const ItemDetailContainer = () => {

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

          <ItemListDetail itemsP={itemsP}/>
      </>  
      )
  }

  export default ItemDetailContainer