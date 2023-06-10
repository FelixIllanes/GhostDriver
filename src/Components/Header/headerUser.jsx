import {useAuth} from "../../hooks/useAuth"
import ConnectionButton from "../ConnectionButton";
import "./header.css"
import { NavLink } from 'react-router-dom';


function HeaderUser(){

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
                    <NavLink to="/User-Home/map" className='nav-menu-link'>Mapa</NavLink>
                    <NavLink to="/User-Home/Historial" className='nav-menu-link'>Historial</NavLink>
                </li>
                <button className="logout" onClick={handleClick}>Logout</button>
            </ul>
        </nav>
      </header>  
    );
}

export default HeaderUser