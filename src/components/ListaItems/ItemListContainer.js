import ItemList from "./ItemList"
import {useEffect} from "react"
import {useState} from "react"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import contexto from "../provider/CartContext"


const ItemListContainer = () => {
  const {productosCarrito} = useContext(contexto)
  console.log(productosCarrito)

  const [itemsP,setItemsP] = useState([])
  const parametros = useParams()

console.log(parametros)
  useEffect(() => {


    const operacion = new Promise((res) => {
  
        setTimeout(() => {

          if(parametros.id){
      
            res(productosCarrito.filter(product=>product.id == parametros.id))
        }
        else{
            res(productosCarrito)
        } 

        }, 2000)
      
      })
      
      operacion.then((resultado) => {
        setItemsP (resultado)
      
          })
  
        }, )

    

      return(
        <>  
          <div>

          </div>
          <ItemList itemsP={itemsP}/>
      </>  
      )
  }

  export default ItemListContainer