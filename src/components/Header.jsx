import { useState, useContext } from "react"
import { UserStateContext } from "../contexts/contexts"
const Header = () => {
    const { user } = useContext(UserStateContext)
    const [menu, changeMenu] = useState(false)

    const handleLogout = () => {
        localStorage.clear()
        location.reload()
    }

    return (
        <div>
            <h2>ProjectHub</h2>
            <nav onClick={() => changeMenu(!menu)}>
                menu
            </nav>
            <div style={{ display: menu ? "block" : "none" }}>
                <div>
                    <h3>{user.name}</h3>
                    <a href="#">
                        Профиль
                    </a>
                    <a href="#">
                        Изменить профиль
                    </a>
                    <a href="#" onClick={handleLogout}>
                        Выйти
                    </a>
                </div>
                <a href="#">
                    Главная
                </a>
                <a href="#">
                    Создать проект
                </a>
                <a href="#">
                    Поиск проекта
                </a>
                <a href="#">
                    Отрыть трекер
                </a>
            </div>
        </div>
    )
}

export default Header