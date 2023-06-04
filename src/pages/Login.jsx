import { useContext } from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { UserStateContext } from "../contexts/contexts"
import Notification from "../components/Notification"

import { styles } from "../utils/styles"

const baseUrl = "/api/login"

const Login = () => {
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserStateContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const [submit, setSubmit] = useState("Войти")
    useEffect(() => {

        if (user)
            navigate("/main")
    }, [user])

    const handleSubmit = (event) => {
        event.preventDefault()
        setSubmit("Вход...")
        axios
            .post(baseUrl, {
                email,
                password
            })
            .then(res => {
                localStorage.setItem("user", JSON.stringify(res.data))
                setUser(res.data)
            })
            .catch(error => {
                setSubmit("Войти")
                setError(error.response.data)
                setTimeout(() => setError(null), 4000)
            })
    }

    return !user && <div>
        <div className="h-9 mt-[1px]">
            {error && <Notification message={error} />}
        </div>
        <div className="">
            <h1 className="text-[28px] text-center mt-20">
                Project<span className="text-detail">Hub</span>
            </h1>
            <h2 className="text-center text-[20px] mb-5">Войдите в свой аккаунт</h2>

            <form onSubmit={handleSubmit} className="flex flex-col max-w-[300px] mx-auto text-[18px]">
                <input
                    className={styles.input}
                    type="text"
                    value={email}
                    placeholder="Почта"
                    onChange={({ target }) => setEmail(target.value)}
                />
                <input
                    className={styles.input}
                    type="text"
                    value={password}
                    placeholder="Пароль"
                    onChange={({ target }) => setPassword(target.value)}
                />
                <button
                    type="submit"
                    className="bg-detail  py-2 mx-auto px-16 mt-7"
                >{submit}</button>
            </form>
            <Link to="/register">
                <p className="text-center mt-7 font-semibold">
                    Нет учетной записи?
                    <span className="text-detail"> Регистрация</span>
                </p>
            </Link>
        </div>
    </div>
}

export default Login