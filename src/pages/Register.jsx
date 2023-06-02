import { useNavigate, Link } from "react-router-dom"
import { UserStateContext } from "../contexts/contexts"
import { useContext, useEffect, useState } from "react"
import Notification from "../components/Notification"
import axios from "axios"
const baseUrl = "/api/users"

const Register = () => {
    const navigate = useNavigate()
    const { user } = useContext(UserStateContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [error, setError] = useState(null)
    const [submit, setSubmit] = useState("Зарегистрироваться")

    const handleSubmit = (event) => {
        event.preventDefault()
        setSubmit("Регистрация...")
        axios
            .post(baseUrl, {
                email,
                password,
                name,
                surname
            })
            .then(() => navigate("/login"))
            .catch(error => {
                setSubmit("Зарегистрироваться")
                setError(error.response.data)
                setTimeout(() => setError(null), 3000)
            })
    }

    useEffect(() => {
        if (user)
            navigate("/main")
    }, [user])

    return !user && <div>
        {error && <Notification message={error} />}
        <h1>Зарегистрируйтесь в ProjectHub!</h1>

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
            <input
                type="text"
                value={name}
                placeholder="имя"
                onChange={({ target }) => setName(target.value)}
            />
            <input
                type="text"
                value={surname}
                placeholder="фамилия"
                onChange={({ target }) => setSurname(target.value)}
            />
            <button type="submit">{submit}</button>
        </form>
        <Link to="/login">
            <p>Есть учетная запись? Логин</p>
        </Link>
    </div>
}

export default Register