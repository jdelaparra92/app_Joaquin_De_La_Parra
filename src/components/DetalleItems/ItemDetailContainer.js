import ItemListDetail from "./ItemListDetail"
import {useEffect} from "react"
import {useState} from "react"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import contexto from "../provider/CartContext"
import { firestore } from "../../firebase"

const ItemDetailContainer = () => {


  const [itemsP,setItemsP] = useState([])
  const [itemsFinal,setItemsFinal] = useState([])
  const parametros2 = useParams()

console.log(parametros2)
  useEffect(() => {
    
    const db = firestore
    const coleccion = db.collection("productosLista")



    const consulta = coleccion.get()


    
    consulta
          .then((resultado) => {

           resultado.docs.forEach(prod =>{

            const productos_final = {
              id: prod.id,
              ...prod.data()
            }
            setItemsFinal(itemsFinal.push(productos_final))
            console.log("productos final")
            console.log(productos_final)
            console.log(itemsFinal)



           })


           if(parametros2.id){
      
            setItemsP(itemsFinal.filter(product=>product.id == parametros2.id))
        }
        else{
          setItemsP(itemsFinal)
        } 
    
           })



           .catch(() => {
            console.log("salio todo mal ;(")
     
            })


  
        },[])

      return(
        <>  

          <ItemListDetail itemsP={itemsP}/>
      </>  
      )
  }

  export default ItemDetailContainer