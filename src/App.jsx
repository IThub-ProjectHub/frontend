import { useState, useEffect } from "react"

import { UserStateContext } from "./contexts/contexts"
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import AppPages from "./pages/AppPages"
import NotFound from "./components/NotFound"

const App = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))

    return (
        <>
            <UserStateContext.Provider value={{ user, setUser }}>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/login"
                            element={<Login />}
                        />
                        <Route
                            path="/register"
                            element={<Register />}
                        />
                        <Route
                            path="/main/*"
                            element={<AppPages />}
                        />
                        <Route
                            path="*"
                            element={<NotFound />}
                        />
                    </Routes>
                </BrowserRouter>
            </UserStateContext.Provider>
        </>
    )
}

export default App
