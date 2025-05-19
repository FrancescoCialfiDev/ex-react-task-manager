import { useParams, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { GlobalContext } from "../providers/globalContext"
import { setColor } from "../components/TaskRow"
import { Modal } from "../components/modal";
import { createPortal } from "react-dom";

const SinglePageDetails = () => {

  const [isShow, setIsShow] = useState(false)
  const navigate = useNavigate()
  const { tasks, removeTask, updateTask } = useContext(GlobalContext)
  const { id } = useParams()
  console.log("Queste sono le tasks", tasks)
  const singleTask = tasks.find((task) => task.id === parseInt(id))


  return (
    singleTask ? <div className="bg-white rounded-2 p-3 shadow">

      <div className="d-flex">
        <h1 className="text-primary fw-bolder">{singleTask.title}</h1>
        <button className={`btn btn-success border-0 m-2 ${setColor(singleTask.status)}`}>{singleTask.status}</button>
      </div>
      <p className="  rounded-2 bg-dark-subtle p-3 shadow">{singleTask.description}</p>
      <sub><strong>Creato in data:</strong> {new Date(singleTask.createdAt).toLocaleDateString()}</sub>

      <button
        className="btn btn-danger mx-3"
        onClick={() => { setIsShow(true) }}
      >Elimina Task
      </button>

      {
        singleTask && createPortal(
          <Modal
            title={"Conferma Eliminazione"}
            content={"Sei sicuro di voler eliminare la task"}
            show={isShow}
            onClose={() => { setIsShow(false) }}
            onConfirm={() => { removeTask(parseInt(id)); navigate("/taskList") }}
          />, document.body)
      }

      <button
        onClick={() => { updateTask(id, prova) }}
      >Update
      </button>

    </div> : "Nessuna task disponibile"
  )
}

export default SinglePageDetails