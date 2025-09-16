import { Image } from "react-bootstrap"




const Header = () => {
    return(
       <div className="container-header">
            <img className="imagen-header"src="/header.jpg"/>
            <h1 className="texto-encima">Tienda Cou2</h1>
            <h4 className="centrado"  style={{color:"white" }}>No compres en mercadolibre compra en Cou Cou</h4>
        </div>
    )
 }

 export default Header