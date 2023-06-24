import { endTravel } from "../../services/general"
import "./modal.css"
function Modal_EndTravel({closeModal, plate, distance}){

    const handleClick = (evt) =>{
        
        endTravel(plate, distance)
        closeModal(false)
        window.location.reload()
    }


    return(
        <div className="modal_background">
            <form /* onSubmit={handleOnSubmit} */>
                <div className="modal_container">
                    <div className="close_boton">
                        <button type="button" onClick={() => closeModal(false)}>X</button>
                    </div>
                    <div className="modal_body">
                        <h2>El viaje se finalizo</h2>
                    </div>
                    <div className="modal_footer">
                        <button className="modal_button" 
                        onClick={handleClick} 
                        type="button">Terminar viaje</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Modal_EndTravel