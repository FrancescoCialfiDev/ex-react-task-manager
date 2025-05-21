import { Modal } from "./modal"
import { useState, useRef } from "react"

export const EditTaskModal = ({ setIsUpdateShow, show, onClose, task, onSave }) => {

    // Variabili del form
    const [title, setTitle] = useState(task.title)
    const [description, setDescription] = useState(task.description)
    const statusRef = useRef()
    const editFormRef = useRef()

    // Funzione per la gestione del submit
    function handleSubmit() {
        editFormRef.current.requestSubmit();

        onSave(task.id, {
            title,
            description,
            status: statusRef.current.value
        })
            .then(() => {
                alert("Operazione andata a buon fine");
                setIsUpdateShow(false);
            })
            .catch(error => {
                alert("Errore: " + error.message);
            });
    }
    return (
        <Modal
            title={"Modifica la Task"}
            content={
                <form className=" d-flex gap-2 mt-5" ref={editFormRef} onSubmit={(e) => { e.preventDefault() }}>
                    <div className="d-flex flex-column">
                        <label htmlFor="name">Nome</label>
                        <input id="name" type="text" placeholder="Modifica il nome" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                    </div>
                    <div className="d-flex flex-column">
                        <label htmlFor="description">Descrizione</label>
                        <textarea value={description} onChange={(e) => { setDescription(e.target.value) }} className="p-3 border-1" id="description" type="text" placeholder="Modifica la descrizione" />
                    </div>
                    <div className="d-flex flex-column">
                        <label htmlFor="state">Stato</label>
                        <select ref={statusRef} id="state" defaultValue={task.status}>
                            <option value={task.status}>{task.status}</option>
                            {["Done", "Doing", "To do"].map(state => state !== task.status ?
                                <option value={state}>{state}</option> : "")
                            }
                        </select>
                    </div>
                </form>}
            confirmText={"Salva"}
            onConfirm={handleSubmit}
            onClose={onClose}
        />
    )

}