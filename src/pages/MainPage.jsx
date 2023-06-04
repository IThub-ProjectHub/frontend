import { useContext } from "react"

import { UserStateContext } from "../contexts/contexts"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import time from "../utils/time"

const MainPage = () => {

    const { user } = useContext(UserStateContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
    }, [user])

    return (
        <h2>{time()}, {user.name}!</h2>
    )
}

export default MainPage