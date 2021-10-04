import ItemList from "./ItemList"
import {useEffect} from "react"
import {useState} from "react"
import {u} from "../productos/ProductosLista"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {

  const [itemsP,setItemsP] = useState([])
  const parametros = useParams()

console.log(parametros)
  useEffect(() => {


    const operacion = new Promise((res) => {
  
        setTimeout(() => {

          if(parametros.id){
      
            res(u.filter(product=>product.id == parametros.id))
        }
        else{
            res(u)
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