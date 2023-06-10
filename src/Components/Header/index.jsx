import ConnectionButton from "../ConnectionButton";
import "./header.css"
import { Link } from 'react-router-dom';
import { useAuth } from "../../hooks/useAuth";

function Header(){

    const { logout, user } = useAuth();


    const handleClick = () =>{
      logout(); 
    }

    return(
      <header className="header">
        <nav className="nav">
            <img className="logo" src="" alt="" />
            <p className="titulo"> Ghost Driver</p>
            <ConnectionButton/>
            <ul className="menu-nav">
                <li className="iten-nav-menu">
                    <Link to= "UserCrud"className='nav-menu-link'>Usuarios</Link>
                </li>
                <li className="iten-nav-menu">
                    <Link to="Invoice" className='nav-menu-link'>Facturas</Link>
                </li>
                <li className="iten-nav-menu">
                    <Link to="VhclCrud" className='nav-menu-link'>Vehiculos</Link>
                </li>
                <button className="logout" onClick={handleClick}>Logout</button>
            </ul>
        </nav>
      </header>  
    );
}

export default Header