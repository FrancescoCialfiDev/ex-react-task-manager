import { useParams, useNavigate } from "react-router-dom"
import { useContext, useState, useRef } from "react"
import { GlobalContext } from "../providers/globalContext"
import { setColor } from "../components/TaskRow"
import { Modal } from "../components/modal";
import { createPortal } from "react-dom";
import { EditTaskModal } from "../components/EditTaskModal";

const SinglePageDetails = () => {

  // Hooks per la gestione della navigazione programmatica
  const navigate = useNavigate()

  // Variabili per la gestione della visibilitò delle modali
  const [isShow, setIsShow] = useState(false)
  const [isUpdateShow, setIsUpdateShow] = useState(false)

  // Destrutturazione dei dati forniti dal provider del nostro contesto globale
  const { tasks, removeTask, updateTask } = useContext(GlobalContext)

  // Hook per la ricezione dei parametri della url
  const { id } = useParams()

  // Condizione per la ricerca del singolo elemento interessato
  const singleTask = tasks.find((task) => task.id === parseInt(id))


  return (

    singleTask ?

      <div className="bg-white rounded-2 p-3 shadow">

        <section>
          <div className="d-flex">
            <h1 className="text-primary fw-bolder">{singleTask.title}</h1>
            <button className={`btn btn-success border-0 m-2 ${setColor(singleTask.status)}`}>{singleTask.status}</button>
          </div>
          <p className=" rounded-2 bg-dark-subtle p-3 shadow">{singleTask.description}</p>
          <div className="d-flex flex-column align-items-end">
            <sub><strong>Creato in data:</strong> {new Date(singleTask.createdAt).toLocaleDateString()}</sub>
          </div>
        </section>


        <div className="d-flex gap-2">
          <button
            className="btn btn-danger"
            onClick={() => { setIsShow(true) }}> Elimina Task
          </button>

          <button
            onClick={() => { setIsUpdateShow(true) }}
            className="btn btn-primary" > Modifica Task
          </button>

        </div>


        {isShow && <Modal
          title={"Conferma Eliminazione"}
          content={"Sei sicuro di voler eliminare la task"}
          show={isShow}
          confirmText={"Elimina"}
          onClose={() => { setIsShow(false) }}
          onConfirm={() => { removeTask(parseInt(id)); navigate("/taskList") }}
        />}

        {isUpdateShow && <EditTaskModal
          setIsUpdateShow={setIsUpdateShow}
          show={isUpdateShow}
          task={singleTask}
          onSave={updateTask}
          onClose={() => { setIsUpdateShow(false) }}
        />}

      </div> : "Nessuna task disponibile"
  )
}

export default SinglePageDetails