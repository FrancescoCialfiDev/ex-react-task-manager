//Import degli elementi necessari
import { useState, useRef, useContext, useMemo } from "react";         // Importiamo le hooks necessarie
import { useNavigate } from "react-router-dom";                        // Importiamo useNavigate per la navigazione programmatica
import { GlobalContext } from "../providers/globalContext";            // Importiamo il contesto da consumare per la ricezione dei dati

//Import degli elementi necessari
let symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~"; symbols = symbols.split("");

//Componente di gestione per l'aggiunta di Tasks
const AddTask = () => {

    const { addTask } = useContext(GlobalContext); // Consumiamo il contesto globale per recuperare la funzione addTask del nostro useTask() // Custom Hooks
    const [title, setTitle] = useState("");        // Creiamo un imput controllato per il nostro titolo con useState()
    const decriptionRef = useRef();                // Creiamo un imput !Non controllato per la descrizione salvando il dato in memoria con useRef()
    const statusRef = useRef();                    // Creiamo un imput !Non controllato per lo status salvando il dato in memoria con useRef()
    // const navigate = useNavigate();                // Salviamo un una variabile useNavigate() poichè non possiamo usare hooks direttamente dentro una funzione.

    // Con useMemo andiamo a gestire l'errore al cambiare di title senza creare un nuovo stato da gestire
    const titleError = useMemo(() => {
        if (!title.trim()) return "Il titolo non può essere vuoto"
        if (symbols.some(symbol => title.includes(symbol))) return "Il titolo non può contenere simboli"
        return ""
    }, [title]);


    async function sendForm() {
        const newTask = {
            title: title,
            description: decriptionRef.current.value,
            status: statusRef.current.value,
        };

        try {
            await addTask(newTask); // Aspettiamo la creazione
            alert("Task inserita correttamente");

            // Pulizia campi
            setTitle("");
            decriptionRef.current.value = "";
            statusRef.current.value = "";
        } catch (error) {
            alert(error.message);
        }
    }


    return (
        <form className="d-flex flex-column gap-3 bg-white rounded-3 p-4" onSubmit={(event) => { event.preventDefault() }}>

            {/* Titolo delle Tasks */}
            <label>
                <h6>Titolo</h6>
                <input
                    type="text"
                    placeholder="Inserisci il titolo..."
                    onChange={(event) => { setTitle(event.target.value) }}
                    value={title}
                />
                {titleError && <p className="text-danger">{titleError}</p>}
            </label>

            {/* Descrizione delle Tasks */}
            <label>
                <h6>Descrizione</h6>
                <textarea
                    ref={decriptionRef}
                    placeholder="Inserisci una descrizione..."
                    className="p-2"
                >
                </textarea>
            </label>

            {/* Stato della Task */}
            <label>
                <h6>Stato</h6>
                <select
                    ref={statusRef}
                    defaultValue="To do"
                >
                    {["To do", "Doing", "Done"].map((state, index) => {
                        return <option key={index} value={state}>{state}</option>
                    })}
                </select>
            </label>

            <button onClick={sendForm}>Invia</button>

        </form>
    )

}

export { AddTask }