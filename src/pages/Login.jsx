import { useContext } from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { UserStateContext } from "../contexts/contexts"
import Notification from "../components/Notification"

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
                setTimeout(() => setError(null), 3000)
            })
    }

    return !user && <div>
        {error && <Notification message={error} />}
        <h1>Войдите в свой аккаунт</h1>

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={email}
                placeholder="email"
                onChange={({ target }) => setEmail(target.value)}
            />
            <input
                type="text"
                value={password}
                placeholder="пароль"
                onChange={({ target }) => setPassword(target.value)}
            />
            <button type="submit">{submit}</button>
        </form>
        <Link to="/register">
            <p>Нет учетной записи? Регистрация</p>
        </Link>
    </div>
}

export default Login