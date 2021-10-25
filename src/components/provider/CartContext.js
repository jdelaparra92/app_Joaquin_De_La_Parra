import {createContext,useState} from "react"
import { firestore } from "../../services/firebase"
import firebase from "firebase/app"

import "firebase/firestore"

const contexto = createContext()

const {Provider} = contexto

export const CustomProvider = ({children}) => {

    const [carrito,setCarrito] = useState([])
    const [numeroCompra,setNumeroCompra] = useState([])

    const [carritoCantidad,setCarritoCantidad] = useState([0])

    const [cantProd,setCantProd] = useState([])
    
    const reducer = (previousValue, currentValue) => previousValue + currentValue
    
    const deleteProduct = (index) => {
        setCarrito(carrito.filter((product, i) => i !== index));
        console.log(carrito)
      }
      const eliminarCarrito = () => {
        setCantProd ([])
        setCarrito ([])
        setCarritoCantidad ([])
         }

         const orden = () => {
           

                const db = firestore
            const coleccion = db.collection("ordenes")
            const nueva_orden ={
                buyer : {
                    nombre : "Joaquin",
                    telefono : "44444444",
                    email : "email@gmail.com"
    
                },
                items : carrito,
                date : firebase.firestore.Timestamp.fromDate(new Date()),
                total : cantProd
            }
            console.log(nueva_orden)
            const consulta  = coleccion.add(nueva_orden)


                consulta
                .then(resultado => {
                 setNumeroCompra (resultado.id)
                })
                .catch( err =>{
                    console.log("hay un error D:")
                })

            

             }


    const addItem = (itemsP,cantidad) => {

                const productosMasCantidad = {
                    cantidad: cantidad,
                    ...itemsP
                  }
                  
      
                  carrito.push(productosMasCantidad)
                  carritoCantidad.push(cantidad)
      
                   
      
                  setCantProd(carritoCantidad.reduce(reducer))
    

            
        
    }  
    console.log("cantidad de productos totales")
    console.log(cantProd)



    const [productosCarrito,setproductosCarrito] = useState([
        {id : 1 , stock : 10, title : "remera" , description : "remera de algodon Xl" , price : 500 , pictureUrl : "https://via.placeholder.com/150/92c952"},
        {id : 2 , stock : 5, title : "buzo" , description : "buzo de algodon l" , price : 800 , pictureUrl : "https://via.placeholder.com/150/92c952"},
        {id : 3 , stock : 7, title : "pantalon" , description : "pantalon de algodon Xl" , price : 4300 , pictureUrl : "https://via.placeholder.com/150/92c952"}
      ])
    

    
    const valorDelContexto = {
        productosCarrito : productosCarrito,
        addItem : addItem,
        orden : orden,
        numeroCompra : numeroCompra,
        deleteProduct:deleteProduct,
        carrito : carrito,
        cantProd : cantProd,
        eliminarCarrito : eliminarCarrito

    }

    return(
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}




export default contexto