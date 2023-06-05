import { useContext, useEffect, useState } from "react"
import { styles } from "../utils/styles"
import { UserStateContext } from "../contexts/contexts"
import axios from "axios"

const userUrl = "/api/users"
const projectUrl = "/api/projects"

const TrackProject = () => {
    const [projectId, setProjectId] = useState(null)
    const [project, setProject] = useState(null)
    const { user } = useContext(UserStateContext)

    useEffect(() => {
        axios
            .get(`${userUrl}/${user.id}`)
            .then(res => !res.data.project
                ? setProjectId("none")
                : setProjectId(res.data.project.id)
            )
    }, [user])
    useEffect(() => {
        console.log(projectId)
        axios
            .get(`${projectUrl}/${projectId}`)
            .then(res => setProject(res.data))
    }, [projectId])
    console.log(project)

    return <>
        <h2 className="text-[28px] text-center mt-[40px] font-bold mb-8">Трекер</h2>
        {!projectId
            ? <h3>Загрузка...</h3>
            : <>{projectId == "none" && !project
                ? <h3>Вы не состоите в проекте. Создайте или присоединитесь к проекту, чтобы разблокировать секцию.</h3>
                : <></>
            }</>
        }
    </>
}

export default TrackProject