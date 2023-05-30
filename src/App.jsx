import { useState } from "react"

import { UserStateContext } from "./contexts/contexts"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import MainPages from "./pages/MainPages"
import Login from "./pages/Login"
import Register from "./pages/Register"

const App = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
    return (
        <>
            <UserStateContext.Provider value={{ user, setUser }}>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="main"
                            element={<MainPages />}
                        />
                        <Route
                            path="login"
                            element={<Login />}
                        />
                        <Route
                            path="register"
                            element={<Register />}
                        />
                    </Routes>
                </BrowserRouter>
            </UserStateContext.Provider>
        </>
    )
}

export default App
