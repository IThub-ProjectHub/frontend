import { useState } from "react"

import Test from "./components/test"

import { UserStateContext } from "./contexts/contexts"

const App = () => {
    const [user, setUser] = useState("")
    return (
        <>
            <h1>{user}</h1>
            <UserStateContext.Provider value={{ user, setUser }}>
                <Test />
                <h2>ffef</h2>
            </UserStateContext.Provider>
        </>
    )
}

export default App
