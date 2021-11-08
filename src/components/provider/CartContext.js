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
        setNumeroCompra ([])
        
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

    let flag = 0

     if (carrito.length === 0) {

        const productosMasCantidad = {
            cantidad: cantidad,
            ...itemsP
        }
        
        carrito.push(productosMasCantidad)
        carritoCantidad.push(cantidad)
        
    

        setCantProd(carritoCantidad.reduce(reducer))
        
        
     }else{
        carrito.map (carrito=>{
            if (carrito.id == itemsP.id) {
            carrito.cantidad = carrito.cantidad + cantidad
            carritoCantidad.push(cantidad)
            setCantProd(carritoCantidad.reduce(reducer))
            flag = 1
              
            }


      })

      if (flag === 0) {
          console.log("entra al if de repetir")
        const productosMasCantidad = {
            cantidad: cantidad,
            ...itemsP
        }
        
        carrito.push(productosMasCantidad)
        carritoCantidad.push(cantidad)
        
        

        setCantProd(carritoCantidad.reduce(reducer))
        
          
      }

     }
          
    }  


    
    
    const valorDelContexto = {
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