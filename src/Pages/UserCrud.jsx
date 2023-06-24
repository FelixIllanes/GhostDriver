import { useState, useEffect } from "react"
import CrudUsr from "../Components/CrudUsr"
import { getAll } from "../services/user";
import { useUser } from "../hooks/useUser";
import Modal_Delete from "../Components/Modal/modal_delete";
import Modal_Update from "../Components/Modal/modal_update";


export default function UserCrud() {
    
    const{users, updateUser, removeUser, focusUser, user} = useUser()

    const[openModal, setOpenModal] = useState(false)
    const[openEdit, seOpenEdit] = useState(false)

    return(
        <>
        {openModal && <Modal_Delete closeModal={setOpenModal} removeUser={removeUser} user={user}/>}
        {openEdit && <Modal_Update closeEdit={seOpenEdit} updateUser={updateUser} user={user}/>}
        <main>
            <h2 className="titulos" >Lista de usuario</h2>
            <div className="container_cruduser_table">
                <table className="crud_table_usr">
                    <thead>
                        <th>CI</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Ciudad</th>
                        <th>Email</th>
                        <th></th>
                    </thead>

                    {users?.map((user, idx) =>(

                        <CrudUsr 
                        key={idx} 
                        user={user} 
                        openModal ={setOpenModal}
                        focusUser={focusUser}
                        openEdit={seOpenEdit}
                        />
                    ))}

                </table>
            </div>
        </main>
        </>
    )
}