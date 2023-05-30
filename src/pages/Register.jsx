import { useNavigate, Link } from "react-router-dom"
import { UserStateContext } from "../contexts/contexts"
import { useContext, useEffect } from "react"

const Register = () => {
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserStateContext)
    console.log(user)
    useEffect(() => {
        if (user)
            navigate("/main")
    }, [user])

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

export default Register