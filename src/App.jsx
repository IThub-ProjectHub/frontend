import { useState, createContext } from "react"
import Test from "./components/test"

const App = () => {
    const [user, setUser] = useState()

    return (
        <UserStateContext.Provider value={user}>
            <Test />
        </UserStateContext.Provider>
    )
}

export default App
