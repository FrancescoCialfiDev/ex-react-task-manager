

export const Modal = ({ title, content, onClose, onConfirm, confirmText }) => {

    return (
        <div className="h-100 w-100 position-fixed top-0 start-0">
            <div className="h-100 overlay d-flex justify-content-center align-items-center">
                <div className="bg-white p-5">
                    <h2>{title}</h2>
                    <div>{content}</div>
                    <div className="d-flex gap-1">
                        <button className="btn btn-danger" onClick={onConfirm}>{confirmText}</button>
                        <button className="btn btn-success" onClick={onClose}>Chiudi</button>
                    </div>
                </div>
            </div>
        </div>
    )

}