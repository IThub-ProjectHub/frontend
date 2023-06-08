import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { styles } from "../utils/styles"

import ProjectHeading from "../components/ProjectHeading"
import ProjectTeam from "../components/ProjectTeam"

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
        <div className="pt-3 max-w-xs mx-auto">
            <ProjectHeading project={project} />
            <ProjectTeam project={project} />
            <button className={`${styles.button} block mb-2 mx-auto w-[300px]`}>Присоединиться</button>
            <div>
                <h2>О проекте</h2>
                <div className="flex gap-16 mb-5">
                    <h3 className="ml-7 text-gray text-[19px]">Отрасль</h3>
                    <p className="text-[19px]">{project.industry}</p>
                </div>
                <div className="flex gap-16 mb-5">
                    <h3 className="ml-7 text-gray text-[19px]">Клиент</h3>
                    <p className="text-[19px]">{project.client}</p>
                </div>
                <div className="mb-5">
                    <h3 className="ml-7 text-gray text-[19px] mb-2">Описание</h3>
                    <p className="ml-7 text-[19px]">{project.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectInfo