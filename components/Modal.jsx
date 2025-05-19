

export const Modal = ({ title, content, show, onClose, onConfirm }) => {


    const values = {
        title,
        content,
        show,
        onClose,
        onConfirm,
    }

    return (
        values.show && <div className="h-100 w-100 position-fixed top-0 start-0">
            <div className="h-100 overlay d-flex justify-content-center align-items-center">
                <div className="bg-white p-5">
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <div className="d-flex gap-1">
                        <button className="btn btn-danger" onClick={onConfirm}>Elimina</button>
                        <button className="btn btn-success" onClick={onClose}>Chiudi</button>
                    </div>
                </div>
            </div>
        </div>
    )


}