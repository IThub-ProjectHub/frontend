import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { UserStateContext } from "../contexts/contexts"
const Header = () => {
    const { user } = useContext(UserStateContext)
    const [menu, changeMenu] = useState(false)

    const handleLogout = () => {
        localStorage.clear()
        location.reload()
    }

    const close = () => changeMenu(!menu)

    return (
        <div>
            <h2>ProjectHub</h2>
            <nav onClick={close}>
                menu
            </nav>
            <div style={{ display: menu ? "block" : "none" }}>
                <div>
                    <h3>{user.name}</h3>
                    <Link to="/main/profile" onClick={close}>
                        Профиль
                    </Link>
                    <Link to="/main/settings" onClick={close}>
                        Изменить профиль
                    </Link>
                    <a href="/login" onClick={handleLogout}>
                        Выйти
                    </a>
                </div>
                <Link to="/main" onClick={close}>
                    Главная
                </Link>
                <Link to="/main/create" onClick={close}>
                    Создать проект
                </Link>
                <Link to="/main/find" onClick={close}>
                    Поиск проекта
                </Link>
                <Link to="/main/tracker" onClick={close}>
                    Отрыть трекер
                </Link>
            </div>
        </div>
    )
}

export default Header