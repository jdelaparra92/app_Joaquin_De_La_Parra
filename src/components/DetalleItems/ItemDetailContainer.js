import ItemListDetail from "./ItemListDetail"
import {useEffect} from "react"
import {useState} from "react"
import {u} from "../productos/ProductosLista"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

  const [itemsP,setItemsP] = useState([])
  const parametros2 = useParams()
  console.log(parametros2)
  useEffect(() => {

    const operacion = new Promise((res) => {
  
        setTimeout(() => {
          if(parametros2.id){
      
            res(u.filter(product=>product.id == parametros2.id))
        }
        else{
            res(u)
        }
        }, 2000)
      
      })
      
      operacion.then((resultado2) => {
        setItemsP (resultado2)
      
          })
  
  })

    

      return(
        <>  

          <ItemListDetail itemsP={itemsP}/>
      </>  
      )
  }

  export default ItemDetailContainer