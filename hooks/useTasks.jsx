import { useState, useEffect } from "react";
const URL_TASKS = import.meta.env.VITE_TASK_URL;

const useTasks = () => {

    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch(URL_TASKS)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(err => console.error(err))
            .finally("Data Fetch Completed")
    }, []);

    function addTask() {

    };

    function removeTask() {

    };

    function updateTask() {

    };

    return { tasks, addTask, removeTask, updateTask };
}

export { useTasks }