import { useState } from "react"
import "./modal.css"

function Modal_Delete({closeModal, removeUser, user}){

    const{ci,name, lastname,city,email, is_superuser} = user || {}

    const handleOnSubmit = (evt) => {
        evt.preventDefault()
        removeUser(ci)
        closeModal()
    }

    return(
        <div className="modal_background">
            <form onSubmit={handleOnSubmit}>
                <div className="modal_container">
                    <div className="close_boton">
                        <button onClick={() => closeModal(false)}>X</button>
                    </div>
                    <div className="modal_body">
                        <h2>¿Seguro que deseas eliminar a este usuario?</h2>
                    </div>
                    <div className="modal_footer">
                        <button className="modal_button" 
                        onClick={() => closeModal(false)} 
                        type="button">Cancelar</button>
                        <button className="modal_button delete_btn" 
                        type="submit">Eliminar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Modal_Delete