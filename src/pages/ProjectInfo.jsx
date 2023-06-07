import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const ProjectInfo = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [project, setProject] = useState(null)

    useEffect(() => {
        if (!location.state)
            navigate("/main/find")

        setProject(location.state)
    }, [])

    return project && (
        <div>{project.name}</div>
    )
}

export default ProjectInfo