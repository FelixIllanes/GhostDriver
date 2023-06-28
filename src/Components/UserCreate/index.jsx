import { useState } from "react"
import "./createuser.css"
import { createUser } from "../../services/user"

function UserCreate({closeModal}) {

    const[body, setBody] = useState({})

    const handleChange = (evt) =>{
       setBody({
        ...body,
        [evt.target.name]: evt.target.value,
        is_superuser: false,
        latitud: '-17.384231',
        longitud: '-66.158697'
       }) 
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        createUser(body).then(data => {
            if (data.status_code !== 201){
                console.log("Error al crear usuario")
            }}).catch(err => console.log(err))
        closeModal(true)
    }

    return(
        <div className="create_user_container">
                <form className="create_user_form">
                    <h1>Crear Usuario</h1>
                    <div className="form_imputs ci">
                        <label> Carnet de Identidad:</label>
                        <input className="form_mod_input"
                        type="text"
                        onChange={handleChange} 
                        name="ci"
                        required
                        autoComplete="off"/>
                    </div>
                    <div className="person_data_name">
                        <div className="form_imputs">
                            <label> Nombre:</label>
                            <input className="form_mod_input" 
                            type="text"
                            onChange={handleChange}  
                            name="name"
                            required
                            autoComplete="off"/>
                        </div>
                        <div className="form_imputs">
                            <label className="form_imputs"> Apellido:</label> 
                            <input className="form_mod_input" 
                            type="text"
                            onChange={handleChange}  
                            name="lastname"
                            required
                            autoComplete="off"/>
                        </div>
                    </div>
                    <div className="directions_data_form">
                        <div className="form_imputs">
                            <label> Ciudad:</label>
                            <input className="form_mod_input" 
                            type="text"
                            onChange={handleChange}  
                            name="city"
                            required
                            autoComplete="off"/>
                        </div>
                    </div>
                    <div className="form_imputs email">
                        <label> Email:</label>
                        <input className="form_mod_input" 
                        type="email"
                        onChange={handleChange}  
                        name="email"
                        required
                        autoComplete="off"/>
                    </div>
                    <div className="form_imputs password">
                        <label> Password:</label>
                        <input className="form_mod_input" 
                        type="password"
                        onChange={handleChange}  
                        name="password"
                        required
                        autoComplete="off"/>
                    </div>
                    <div className="login_btn">
                        <button type="submit" onClick={handleSubmit} className="button_one">Crear Usuario</button>
                    </div>
                </form>
            </div>
    )
}
export default UserCreate