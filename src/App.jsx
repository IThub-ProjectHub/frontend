import { useState, useEffect } from "react"

import { UserStateContext } from "./contexts/contexts"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import AppPages from "./pages/AppPages"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Header from "./components/Header"
import MainPage from "./pages/MainPage"

const App = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
    const isLogged =
        location.pathname != "/login"
        || location.pathname != "/register"
    console.log(isLogged)
    useEffect(() => {
        if (!user) {
            location.assign(`${location.host}/login`)
        }
    }, [user])
    return (
        <>
            <UserStateContext.Provider value={{ user, setUser }}>
                <div style={{ display: isLogged ? "block" : "none" }}>
                    <Header />
                </div>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="login"
                            element={<Login />}
                        />
                        <Route
                            path="register"
                            element={<Register />}
                        />
                        <Route
                            path="main"
                            element={<MainPage />}
                        />
                    </Routes>
                </BrowserRouter>
            </UserStateContext.Provider>
        </>
    )
}

export default App
