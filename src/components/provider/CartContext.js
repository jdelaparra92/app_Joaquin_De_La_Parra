import {createContext,useState} from "react"

const contexto = createContext()

const {Provider} = contexto
const prodCarrito = []

export const CustomProvider = ({children}) => {

    const [carrito,setCarrito] = useState([])
    const addItem = (itemsP,cantidad) => {


            prodCarrito.push(itemsP,cantidad)
            console.log("cantidad de productos guardados en el carrito")
            console.log(prodCarrito)
        


    }  




    const [productosCarrito,setproductosCarrito] = useState([
        {id : 1 , stock : 10, title : "remera" , description : "remera de algodon Xl" , price : 500 , pictureUrl : "https://via.placeholder.com/150/92c952"},
        {id : 2 , stock : 5, title : "buzo" , description : "buzo de algodon l" , price : 800 , pictureUrl : "https://via.placeholder.com/150/92c952"},
        {id : 3 , stock : 7, title : "pantalon" , description : "pantalon de algodon Xl" , price : 4300 , pictureUrl : "https://via.placeholder.com/150/92c952"}
      ])
    

    
    const valorDelContexto = {
        productosCarrito : productosCarrito,
        addItem : addItem,
        carrito : carrito

    }

    return(
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}




export default contexto