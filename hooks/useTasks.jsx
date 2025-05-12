import { useState, useEffect } from "react"; // Importiamo useState("Gestione Stati") e useEffect("Gestione effetti collaterali")
const URL_TASKS = import.meta.env.VITE_TASK_URL; // Utilizziamo una variabile di ambiente per centralizzare la nostra url

const useTasks = () => {

    const [tasks, setTasks] = useState([]); // Creazione di uno stato locale e gestione dei dati al montaggio del componente con useEffect()

    // Otteniamo i dati dal nostro BE e salviamo le task ottenute nella nostra variabile di stato
    useEffect(() => {
        fetch(URL_TASKS)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(err => console.error(err))
            .finally(() => console.log("Data Fetch Completed"))
    }, []);

    // Funzione per l'aggiunta delle nuove task
    function addTask(newTask) {

        fetch(URL_TASKS, {
            method: "POST", // Settiamo il tipo di richiesta HTTP ( POST )
            headers: { "Content-Type": "application/json" }, // Configuriamo gli headers e specifichiamo il tipo di file inviato
            body: JSON.stringify(newTask) // Parsiamo l'oggetto in stringa da inviare al nostro backEnd ( Express lo esegue in automatico )
        })
            .then(result => result.json())
            .then(response => {
                if (response.success === true) {
                    setTasks(prev => ([...prev, response.task]))
                    alert("Task aggiunta con successo")
                } else {
                    throw new Error(response.message)
                }
            })
            .catch(err => alert(err.message))

    };

    function removeTask() { }; // Rimuovi Task
    function updateTask() { }; // Aggiorna Task

    return { tasks, addTask, removeTask, updateTask }; // Esportazione degli elementi necessari alla gestione dei tasks
}

export { useTasks }