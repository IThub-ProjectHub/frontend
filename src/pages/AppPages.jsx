import { useContext } from "react"

import { UserStateContext } from "../contexts/contexts"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import MainPage from "./MainPage"

const AppPages = () => {
    const date = new Date
    const hour = date.getHours()


    const { user } = useContext(UserStateContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
    }, [user])

    return user && <>
        <Header />
    </>
}

export default AppPages