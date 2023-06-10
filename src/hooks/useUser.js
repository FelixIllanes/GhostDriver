import { useEffect, useState } from "react"
import { getAll, remove } from "../services/user"

export const useUser = () =>{
    const[users, setUsers] = useState([])
    const[user, setUser] = useState(null)

    useEffect(() => {
        getAll().then(setUsers)
    }, [])

    const updateUser = (ci, body) =>{
        const newUsers = users.map((user) => user.ci === ci ? body : user)
        setUsers(newUsers)
    }

    const removeUser = (ci) => {
        const newUsers = users.filter(user => user.ci !== ci)
        setUsers(newUsers)
        remove(ci)
    }

    const focusUser = (user) => {
        setUser(user)
    }

    return{users, updateUser, removeUser, focusUser, user}
}