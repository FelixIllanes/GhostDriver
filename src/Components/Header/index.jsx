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
            <p className="tituloA"> Ghost Driver</p>
            <ConnectionButton/>
            <ul className="menu-nav">
                <li className="iten-nav-menu">
                    <Link to= "/Admin-home"className='nav-menu-link'>Usuarios</Link>
                </li>
                <li className="iten-nav-menu">
                    <Link to="ServiceHistory" className='nav-menu-link'>Transacciones</Link>
                </li>
                <li className="iten-nav-menu">
                    <Link to="Invoice" className='nav-menu-link'>Facturas</Link>
                </li>
                <li className="iten-nav-menu">
                    <Link to="Invoce_pay" className='nav-menu-link'>Pagar Facturas</Link>
                </li>
                <li className="iten-nav-menu">
                    <Link to="VhclCrud" className='nav-menu-link'>Vehiculos</Link>
                </li>
                <li className="iten-nav-menu">
                    <Link to="Report" className='nav-menu-link'>Reporte</Link>
                </li>
                <button className="logout" onClick={handleClick}>Logout</button>
            </ul>
        </nav>
      </header>  
    );
}

export default Header