import { useContext, useMemo, useState, useCallback } from "react" // Importiamo useContext per consumare il nostro contesto globale ed accedere ai dati
import { GlobalContext } from "../providers/globalContext" // Importiamo il contesto che voglimao consumare e dalla quale vogliamo prendere i dati
import { TaskRow } from "../components/TaskRow"


const TaskList = () => {

    const { tasks, setTasks } = useContext(GlobalContext);
    const [sortBy, setSortBy] = useState("createdAt")
    const [sortOrder, setSortOrder] = useState(1)
    const [searchQuery, setSearchQuery] = useState("")

    function handleSort(field) {
        if (field === sortBy) {
            setSortOrder(sortOrder * -1)
        } else {
            setSortBy(field)
            setSortOrder(1)
        }
    }

    function debounce(callback, delay) {
        let timer;
        return (value) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                callback(value);
            }, delay);
        };
    }

    const debouncedSearch = useCallback(
        debounce(setSearchQuery, 300),
        []
    );




    const handleFilter = useMemo(() => {

        const filteredTask = tasks.filter((task) => { return task.title.toLowerCase().includes(searchQuery.toLowerCase()) })

        tasks.sort((a, b) => {
            let result;
            if (sortBy === "title") {
                result = a.title.localeCompare(b.title)
            } else if (sortBy === "status") {
                const statusOption = ["To do", "Doing", "Done"]
                result = statusOption.indexOf(a.status) - statusOption.indexOf(b.status)
            } else if (sortBy === "createdAt") {
                result = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            }
            return result * sortOrder
        })

        return filteredTask
    }, [tasks, sortBy, sortOrder, searchQuery])

    return (
        <>
            <input
                type="text"
                placeholder="Ricerca per titolo"
                onChange={(e) => { debouncedSearch(e.target.value) }} />
            <table>
                {/* Intestazione Tabella */}
                <thead>
                    <tr>
                        {["title", "status", "createdAt"].map((intestazione, index) => {
                            return (
                                <th
                                    onClick={() => { handleSort(intestazione) }}
                                    key={index}
                                    className="border p-3"
                                    style={{ backgroundColor: "rgba(2, 45, 73, 0.99)", color: "white" }}>
                                    <div role="button" className="text-white text-decoration-none">{intestazione}{sortBy === intestazione ? (sortOrder === 1 ? "↑" : "↓") : ""}</div>
                                </th>
                            )
                        })}
                    </tr>
                </thead>

                {/* Corpo della tabella */}
                <tbody>
                    {handleFilter.map((task) => {
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