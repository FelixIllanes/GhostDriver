import "./loginform.css"
import { useState, useContext } from "react";

import { AuthContext } from "../../store/user";
import { useNavigate } from "react-router-dom";


function LoginForm() {

    const navigate = useNavigate();

    const { signIn } = useContext(AuthContext);
    const [errores, setErrores] = useState({});

    const handleSubmit = async (evt) => {
        evt.preventDefault();

        const body = {
            email: evt.target.username.value,
            password: evt.target.password.value,
        };
        try{
            await signIn(body)
        }
        catch (err) {
            console.log(err)
        }
    };

    const redirectTo = () => {
        navigate(`/CreateUser`)
    }

    return(
        <main style={{height:"96.5vh"}}>
            <div className="login">
                <form className="form_login" onSubmit={handleSubmit}>
                    <h1>Inicio de sesión</h1>
                    <div>
                        <label> Nombre de usuario:</label>
                        <input className="form_mod_input"
                        type="text" 
                        name="username"
                        id = "username"
                        required
                        autocomplete="off"/>
                    </div>
                    <div >
                        <label> Contraseña:</label>
                        <input className="form_mod_input" 
                        type="password" 
                        name="password"
                        id = "password"
                        required
                        autocomplete="off"/>
                    </div>
                    <div className="login_btn">
                        <button type="submit" className="button_one">Ingresar</button>
                        <p>Registrate <a className="redirect" onClick={redirectTo}>aqui</a></p>
                    </div>
                </form>
            </div>
        </main>
    )
}
export default LoginForm