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
    async function addTask(newTask) {
        const response = await fetch(URL_TASKS, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTask)
        });

        const data = await response.json();

        if (!data.success) throw new Error(data.message);

        setTasks(prev => [...prev, data.task]);
    }

    function removeTask(taskId) {
        fetch(URL_TASKS + "/" + taskId, {
            method: "DELETE"
        })
            .then((result) => result.json())
            .then((response) => {
                if (response.success) {
                    setTasks(task => task.filter((task) => taskId !== parseInt(task.id)))
                    alert("Task rimossa con successo")
                } else {
                    throw new Error("Impossibile eliminare la task");
                }
            })
            .catch((error) => alert(error.message))


    }; // Rimuovi Task

    function updateTask(taskId, updatedTask) {
        return fetch(URL_TASKS + "/" + taskId, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedTask)
        })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    setTasks((tasks) => tasks.map((task) => task.id === Number(taskId) ? result.task : task))
                } else {
                    throw new Error("Errore nella modifica")
                }
            })
    }; // Aggiorna Task

    return { tasks, setTasks, addTask, removeTask, updateTask }; // Esportazione degli elementi necessari alla gestione dei tasks
}

export { useTasks }