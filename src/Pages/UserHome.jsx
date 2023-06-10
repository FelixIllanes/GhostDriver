import { Outlet } from "react-router-dom";
import HeaderUser from "../Components/Header/headerUser";

export default function UserHome(){
    return(
        <>
            <HeaderUser/>
                <Outlet />
        </>
    )
}