import "./modal.css"

function Alert({closeModal}){

    return(
        <div className="modal_background">
            <div className="modal_container">
                <div className="close_boton">
                </div>
                <div className="modal_body">
                    <h2>Se creo el usuario de manera exitosa</h2>
                </div>
                <div className="modal_footer">
                    <button className="modal_button" 
                    type="button" onClick={()=>window.location.reload()}>Aceptar</button>
                </div>
            </div>
        </div>
    )
}

export default Alert