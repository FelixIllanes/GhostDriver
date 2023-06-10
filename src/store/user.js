import { createContext, useState, useEffect } from "react";
import { auth } from "../services/auth";
import { get } from "../services/user"
import { useNavigate } from "react-router-dom";
import { setVehiclePosition } from "../services/vehicle";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    const[user, setUser] = useState(null);
    const[isAuthenticated, setIsAutenticated] = useState(false);

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        const userId = window.localStorage.getItem('userId');
        if (!token && !userId){
            setIsAutenticated(false);
        }else{
            setIsAutenticated(true);
            get(userId)
                .then(setUser)
                .catch((err) => console.error(err));
        }
    }, []);

    const authenticate = (user) => {
        const { ci, name, lastname, email, is_superuser } = user;
        setUser({ ci, name, lastname, email, is_superuser });
        setIsAutenticated(true);

        console.log(user)

        window.localStorage.setItem('userId', user.user.ci);
        window.localStorage.setItem('token', user.token);
      };

    const signIn = async (body) => {
        try {
            const res = await auth(body);
            if (res.status_code !== 201) throw new Error(res?.message);
            authenticate(res);

            setVehiclePosition()

            if(res.user.is_superuser){
                navigate('/')
            }else{
                navigate('/User-Home')

            }
                 
        } catch (err) {
            console.error(err);
        }
    };

    const signUp = () => {
        setIsAutenticated(false);
    };

    const logout = () =>{
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('userId');
        setUser(null);
        setIsAutenticated(false);
        navigate('/Login')
    };

    const vars = {
        isAuthenticated,
        user,
        signIn,
        signUp,
        logout,
        user,
      };
    return <AuthContext.Provider value={vars}>{children}</AuthContext.Provider>;
};