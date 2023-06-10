import { useState } from "react"
import "./modal.css"
import { update } from "../../services/user"

function Modal_Update({closeEdit, updateUser, user}){

    const[body, setBody] = useState({})

    const{ci,name, lastname,city,email,password, is_superuser} = user
    const[errores, setErrores] = useState({})

    const handleOnChange = (evt) => {
        setBody({
            ...body,
            [evt.target.name] : evt.target.value,
            password: password,
            ci:ci,
            is_superuser: is_superuser,
            city:city,
        })
    }

    const handleOnSubmit = (evt) => {
        evt.preventDefault()

        update(body, ci).then(data =>{
            /* if(data.email){
                setErrores({
                    errores,
                    error: "El correo ingresado ya existe"
                })
            }else{
                updateUser(ci,)
            } */
            updateUser(ci, body)
            closeEdit()
        })
    }

    return(
        <div className="modal_background_update">
            <form onSubmit={handleOnSubmit} className="update_user_modal">
                <div className="modal_container_update">
                    <div className="close_boton">
                        <button onClick={() => closeEdit(false)} type="button">X</button>
                    </div>
                    <div className="modal_body">
                    <h2>Editar Usuario</h2>
                    <div className="form_imputs ci">
                        <label> Carnet de Identidad:</label>
                        <input className="form_mod_input"
                        type="text"
                        disabled
                        defaultValue={ci}
                        onChange={handleOnChange} 
                        name="ci"
                        autocomplete="off"/>
                    </div>
                    <div className="person_data_name">
                        <div className="form_imputs">
                            <label> Nombre:</label> <br />
                            <input className="form_mod_input" 
                            type="text"
                            defaultValue={name}
                            onChange={handleOnChange}  
                            name="name"
                            autocomplete="off"/>
                        </div>
                        <div className="form_imputs">
                            <label className="form_imputs"> Apellido:</label> <br />
                            <input className="form_mod_input" 
                            type="text"
                            defaultValue={lastname}
                            onChange={handleOnChange}  
                            name="lastname"
                            autocomplete="off"/>
                        </div>
                    </div>
                    <div className="person_data_name">   
                        <div className="directions_data_form">
                            <div className="form_imputs">
                                <label> Ciudad:</label> <br />
                                <input className="form_mod_input" 
                                type="text"
                                defaultValue={city}
                                onChange={handleOnChange}  
                                name="city"
                                autocomplete="off"/>
                            </div>
                            </div>
                            <div className="form_imputs email">
                                <label> Email:</label> <br />
                                <input className="form_mod_input" 
                                type="email"
                                defaultValue={email}
                                onChange={handleOnChange}  
                                name="email"
                                autocomplete="off"/>
                            </div>
                        </div>
                    </div>
                    <div className="modal_footer_update">
                        <button className="modal_button" 
                        onClick={() => closeEdit(false)} 
                        type="button">Cancelar</button>
                        <button className="modal_button update_btn" 
                        type="submit">Actualizar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Modal_Update