import { useContext } from "react"

import { UserStateContext } from "../contexts/contexts"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const MainPages = () => {
    const { user } = useContext(UserStateContext)
    const navigate = useNavigate()

    useEffect(() => {
        console.log(user)
        if (!user) {
            navigate("/login")
        }
    }, [user])

    return user && <>
        <div>{user.name}</div>
    </>
}

export default MainPages