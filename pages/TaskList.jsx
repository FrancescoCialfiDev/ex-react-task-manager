import { useContext } from "react" // Importiamo useContext per consumare il nostro contesto globale ed accedere ai dati
import { GlobalContext } from "../providers/globalContext" // Importiamo il contesto che voglimao consumare e dalla quale vogliamo prendere i dati
import { TaskRow } from "../components/TaskRow"


const TaskList = () => {

    const { tasks } = useContext(GlobalContext);

    return (
        <>
            <table>

                {/* Intestazione Tabella */}
                <thead>
                    <tr>
                        {["Nome", "Stato", "Data di creazione"].map((intestazione, index) => {
                            return (
                                <th
                                    key={index}
                                    className="border p-3"
                                    style={{ backgroundColor: "rgba(2, 45, 73, 0.99)", color: "white" }}>{intestazione}
                                </th>
                            )
                        })};
                    </tr>
                </thead>

                {/* Corpo della tabella */}
                <tbody>
                    {tasks.map((task) => {
                        return (
                            <TaskRow
                                key={task.id}
                                id={task.id}
                                title={task.title}
                                status={task.status}
                                createdAt={new Date(task.createdAt).toLocaleDateString()}
                            />
                        )
                    })}
                </tbody>
            </table>
        </>
    )

}

export { TaskList }