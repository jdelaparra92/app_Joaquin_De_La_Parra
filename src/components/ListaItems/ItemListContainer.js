import ItemList from "./ItemList"
import {useEffect} from "react"
import {useState} from "react"
import { useParams } from "react-router-dom"
import { firestore } from "../../services/firebase"

const ItemListContainer = () => {


  const [itemsP,setItemsP] = useState([])
  const [itemsFinal,setItemsFinal] = useState([])
  const parametros = useParams()

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


           })


           if(parametros.id){
      
            setItemsP(itemsFinal.filter(product=>product.id == parametros.id))        
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
          <div>

          </div>
          <ItemList itemsP={itemsP}/>
      </>  
      )
  }

  export default ItemListContainer