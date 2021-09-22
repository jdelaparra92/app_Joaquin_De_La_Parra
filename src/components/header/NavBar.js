import CartWidget from "./CartWidget"
const NavBar = () => {
    return(
    <div className="navContenedor">
       <h3>Moodis E-Commerce</h3>
       <nav>
           <a href="#">Quienes Somos</a>
           <a href="#">Productos</a>
           <a href="#">Ofertas</a>
           <a href="#">Contacto</a>
       </nav>
       <CartWidget/>
    </div>

    )


    
}

export default NavBar