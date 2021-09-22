import {useState} from "react"

const ItemCount = ({stock,initial,onAdd}) => {

    const [contador,setContador] = useState(initial)


    const SumarContador = () => {
        if (contador < stock) {
           setContador (contador + 1)
         } 
    }

    const RestarContador = () => {
        if (contador > 1) {
            setContador (contador - 1)
          } 


        
}

const ConfirmarCompra = () => {
    if (stock > 0) {
        onAdd(contador)
    }
     
}





    return(
        <>
          <p>Stock: {stock}</p>
          <p>Contador: {contador}</p>
          <button onClick={SumarContador}>Contador +</button>    
          <button onClick={RestarContador}>Contador -</button>  
          <button onClick={ConfirmarCompra}>Agregar al Carrito</button>
        </>

    )
}

export default ItemCount