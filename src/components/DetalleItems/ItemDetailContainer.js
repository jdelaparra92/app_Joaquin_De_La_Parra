import ItemListDetail from "./ItemListDetail"
import {useEffect} from "react"
import {useState} from "react"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import contexto from "../provider/CartContext"

const ItemDetailContainer = () => {
  const {productosCarrito} = useContext(contexto)
  console.log(productosCarrito)

  const [itemsP,setItemsP] = useState([])
  const parametros2 = useParams()
  console.log(parametros2)
  useEffect(() => {

    const operacion = new Promise((res) => {
  
        setTimeout(() => {
          if(parametros2.id){
      
            res(productosCarrito.filter(product=>product.id == parametros2.id))
        }
        else{
            res(productosCarrito)
        }
        }, 2000)
      
      })
      
      operacion.then((resultado2) => {
        setItemsP (resultado2)
      
          })
  
        }, [])

    

      return(
        <>  

          <ItemListDetail itemsP={itemsP}/>
      </>  
      )
  }

  export default ItemDetailContainer