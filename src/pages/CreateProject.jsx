import { useState } from "react"
import { styles } from "../utils/styles"

const CreateProject = () => {
    const [name, setName] = useState("")
    const [smdescription, setSmdescription] = useState("")
    const [industry, setIndustry] = useState("")
    const [client, setClient] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = () => {

    }

    return (
        <>
            <h2>Новый проект</h2>
            <form onSubmit={handleSubmit} className=" max-w-xs">
                <label>
                    <h3>Название проекта</h3>
                    <input
                        className={`${styles.input} w-[320px]`}
                        type="text"
                        value={name}
                        placeholder="Укажите название"
                        onChange={({ target }) => setName(target.value)}
                    />
                </label>
                <label>
                    <h3>Краткое описание</h3>
                    <textarea
                        className={`
                            border-[1px] border-x-[#272727] border-t-[#272727] 
                            ${styles.input} h-24 resize-none w-[320px]
                        `}
                        type="text"
                        value={smdescription}
                        placeholder="Кратко опиши идею"
                        onChange={({ target }) => {
                            setSmdescription(target.value)
                        }}
                    />
                </label>
                <label>
                    Отрасль
                    <select className="select bg-main focus:outline-none border border-gray-500 focus:border-[#C292FF] p-2 rounded-sm">
                        <option>IThub Club</option>
                        <option>Ed Tech</option>
                        <option>Social Projects</option>
                        <option>IT</option>
                        <option>Game</option>
                        <option>Business</option>
                        <option>Chat Bots/Apps</option>
                        <option>HR</option>
                    </select>
                </label>
            </form>
        </>
    )
}

export default CreateProject