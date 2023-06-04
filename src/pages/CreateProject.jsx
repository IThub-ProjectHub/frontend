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
            <form onSubmit={handleSubmit}>
                <label>
                    <h3>Название проекта</h3>
                    <input
                        className={styles.input}
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
                            ${styles.input} h-24 resize-none
                        `}
                        type="text"
                        value={smdescription}
                        placeholder="Кратко опиши идею"
                        onChange={({ target }) => {
                            setSmdescription(target.value)
                        }}
                    />
                </label>
            </form>
        </>
    )
}

export default CreateProject