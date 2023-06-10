import { useState } from "react"
import Modal_Delete from "../Modal/modal_delete"

function CrudUsr({user, openModal, focusUser, openEdit}) {

    const{ci,name, lastname,city,email, is_superuser} = user


    const handleEdit = () => {
        focusUser(user)
        openEdit(true)
    }

    const handleDelete = () =>{
        focusUser(user)
        openModal(true)
    }
    
    if(!is_superuser){
        return(
            <tbody>
                <tr>
                    <td>{ci}</td>
                    <td>{name}</td>
                    <td>{lastname}</td>
                    <td>{city}</td>
                    <td>{email}</td>
                    <td className="buttons_crud">
                        <button className="btn_update" onClick={handleEdit}><i className="fa-solid fa-pen"></i></button>
                        <button className="btn_delete" onClick={handleDelete}><i className="fa-solid fa-trash-can"></i></button>
                    </td>
                </tr>
            </tbody>
        )
    }
}
export default CrudUsr