import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const totales = 25000;
    const token   = false;
    return (
        <div className="container-barra">
            <div className="barra-izquierda">
                <h6>Tu Tienda amiga del Outdoor !!</h6>
                
              
            </div>
            <div className="barra-derecho  text-info">
                <Link className="nav-link" aria-current="page" to="/">
              <button type="button" class="botones">🔐 Home</button>
              </Link>
              <Link className="nav-link" aria-current="page" to="/Login">
              <button type="button" class="botones">🔐Login</button>
              </Link>
              <Link className="nav-link" aria-current="page" to="/Register">
              <button type="button" class="botones">🔐 Register</button>
              </Link>
              <Link className="nav-link" aria-current="page" to="/Carrito">
                   <button type="button" class="botones">🛒 Carrito</button>
              </Link>
                
                
            </div>

        </div>
        
    
    );
    };



export default Navbar;