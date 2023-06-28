import { useState } from "react";
import UserCreate from "../Components/UserCreate";
import Alert from "../Components/Modal/alert";
import {useNavigate} from "react-router-dom"

export default function CreateUser() {

    const navigate = useNavigate()
    const[openModal, setOpenModal] = useState(false)

    const redirectTo = () =>{
        navigate(`/`)
    }

    return(
        <>
        {openModal && <Alert closeModal={setOpenModal}/>}
        <main className="create_user_background">
            <button onClick={redirectTo} className="goBack"><i id="back" className="fa-solid fa-circle-arrow-left"></i></button>
            <UserCreate closeModal={setOpenModal}/>
        </main>
        </>
    )
}