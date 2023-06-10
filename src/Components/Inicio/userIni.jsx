import Modal_Delete from "../Modal/modal_delete"
import { useState } from "react"
function UserIni(){

    const [openModal, setOpenModal] = useState(false)



    return(
        <div>
            <button onClick={() => {setOpenModal(true);}}>Open modal</button>
            {openModal && <Modal_Delete closeModal={setOpenModal}/>}
            <h2>Inicio de un usuario</h2>
        </div>
    )
}

export default UserIni