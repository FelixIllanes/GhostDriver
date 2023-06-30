import { useEffect, useState } from "react"
import { endTravel } from "../../services/general"
import "./modal.css"
import CarLoader from "../CarLoader";
import { update } from "../../services/user";
import { vehicleUpdate } from "../../services/vehicle";
function Modal_EndTravel({closeModal, plate, distance, ci, posicion}){

    const[loaded, setLoaded] = useState(true)
    
    const[body,setBody] = useState({
        longitud: posicion.lng,
        latitud: posicion.lat
    })

    useEffect(() => {
        const espera = async () =>{
            update(body, ci)
            vehicleUpdate(body, plate)
            await new Promise(resolve => setTimeout(resolve,5000));
            setLoaded(false)
        }
        espera()
    },[]); 
    
    const handleClick = (evt) =>{
        
        endTravel(plate, distance)
        closeModal(false)
        window.location.reload()
    }

    if(loaded){
        return <div className="modal_background">
                <div className="modal_container2">
                  <CarLoader/>
                </div>
               </div>
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