import { useContext } from "react" // Importiamo useContext per consumare il nostro contesto globale ed accedere ai dati
import { GlobalContext } from "../providers/globalContext" // Importiamo il contesto che voglimao consumare e dalla quale vogliamo prendere i dati
import { TaskRow } from "../components/TaskRow"


const TaskList = () => {

    const { tasks } = useContext(GlobalContext)
    const intestazioni = ["Nome", "Stato", "Data di creazione"]

    return (

        <>
            <table>
                <thead>
                    <tr>
                        {intestazioni.map((intestazione, index) => {
                            return <th key={index} className="border p-3">{intestazione}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => {
                        return (
                            <TaskRow
                                key={task.id}
                                title={task.title}
                                status={task.status}
                                createdAt={task.createdAt}
                            />
                        )
                    })}
                </tbody>
            </table>
        </>
    )

}

export { TaskList }