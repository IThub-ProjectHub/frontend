import { useContext } from "react"

import { UserStateContext } from "../contexts/contexts"
import { useEffect } from "react"

const Test = () => {
    const { user, setUser } = useContext(UserStateContext)

    return (
        <input
            onChange={({ target }) => setUser(target.value)}
        />
    )
}

export default Test