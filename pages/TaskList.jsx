import { useContext } from "react" // Importiamo useContext per consumare il nostro contesto globale ed accedere ai dati
import { GlobalContext } from "../providers/globalContext" // Importiamo il contesto che voglimao consumare e dalla quale vogliamo prendere i dati

const TaskList = () => {

    const { tasks } = useContext(GlobalContext)

    return (
        tasks.map((tasks) => {
            return <div>{tasks.title}</div>
        })
    )

}

export { TaskList }