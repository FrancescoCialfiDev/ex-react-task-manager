import { useState, useRef, useContext } from "react"
const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~".split("");
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../providers/globalContext";

// Componente di gestione per l'aggiunta di Tasks
const AddTask = () => {

    const { addTask } = useContext(GlobalContext)
    const [title, setTitle] = useState("");
    const decriptionRef = useRef()
    const statusRef = useRef()
    const navigate = useNavigate()

    function sendForm() {
        if (!title.trim() || symbols.some(symbol => title.includes(symbol))) {
            alert("Il titolo non può contenere simboli o essere vuoto");
            return
        }

        const newTask = {
            title: title,
            description: decriptionRef.current.value,
            status: statusRef.current.value
        }

        addTask(newTask)
        setTitle("")
        decriptionRef.current.value = ""
        statusRef.current.value = ""

    }


    return (
        <form className="d-flex flex-column gap-3 bg-white rounded-3 p-4" onSubmit={(event) => { event.preventDefault() }}>

            {/* Titolo delle Tasks */}
            <label>
                <h6>Titolo</h6>
                <input
                    type="text"
                    placeholder="Inserisci il titolo della task"
                    onChange={(event) => { setTitle(event.target.value) }}
                    value={title}
                />
            </label>

            {/* Descrizione delle Tasks */}
            <label>
                <h6>Descrizione</h6>
                <textarea
                    ref={decriptionRef}
                    name="description"
                    placeholder="Inserisci una descrizione"
                    className="p-2"
                >
                </textarea>
            </label>

            {/* Stato della Task */}
            <label>
                <h6>Stato</h6>
                <select name="stato" id="stato" ref={statusRef} defaultValue={""}>
                    <option value="" disabled>Scegli uno stato</option>
                    <option value="To do">To do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
            </label>

            <button onClick={sendForm}>Invia</button>

        </form>
    )

}

export { AddTask }