import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
const NavBar = () => {

    return(
    <div className="navContenedor">
        <Link className="link_logo" to="/"><h3>Moodis E-Commerce</h3></Link>
       <nav>
           <Link className="linkk" to="/cate/1">Cate1</Link>
           <Link className="linkk" to="/cate/2">Cate2</Link>
           <Link className="linkk" to="/cate/3">Cate3</Link>
       </nav>
       <CartWidget/>
    </div>

    )


    
}

export default NavBar