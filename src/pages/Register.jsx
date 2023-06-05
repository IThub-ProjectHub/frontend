import { useNavigate, Link } from "react-router-dom"
import { UserStateContext } from "../contexts/contexts"
import { useContext, useEffect, useState } from "react"
import Notification from "../components/Notification"
import axios from "axios"

import { styles } from "../utils/styles"

const baseUrl = "/api/users"

const Register = () => {
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserStateContext)

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
            .then(res => {
                localStorage.setItem("user", JSON.stringify(res.data))
                setUser(res.data)
            })
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
        <div className="h-9 mt-[1px]">
            {error && <Notification message={error} />}
        </div>
        <div>
            <h1 className="text-[28px] text-center mt-20">
                Project<span className="text-detail">Hub</span>
            </h1>
            <h2 className="text-center text-[20px] mb-5">
                Зарегистрируйтесь в ProjectHub!
            </h2>

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
                <input
                    className={styles.input}
                    type="text"
                    value={name}
                    placeholder="Имя"
                    onChange={({ target }) => setName(target.value)}
                />
                <input
                    className={styles.input}
                    type="text"
                    value={surname}
                    placeholder="Фамилия"
                    onChange={({ target }) => setSurname(target.value)}
                />
                <button
                    type="submit"
                    className="bg-detail  py-2 mx-auto px-10 mt-7"
                >{submit}</button>
            </form>
            <Link to="/login">
                <p className="text-center mt-7 font-semibold">
                    Есть учетная запись?
                    <span className="text-detail"> Вход</span>
                </p>
            </Link>
        </div>
    </div>
}

export default Register