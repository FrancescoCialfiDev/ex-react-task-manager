import { createContext } from "react";
const GlobalContext = createContext(); // Creiamo un Context che servirà come contenitore per i dati che vogliamo condividere ( Evita il props Drilling)
const URL = import.meta.env.VITE_URL || "http://localhost:3001/tasks"
import { useEffect, useState } from "react";

const GlobalProvider = ({ children }) => {
    console.log(URL)
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(err => console.error(err))
    }, [])


    return (
        // Il Provider avvolge i componenti figli e fornisce loro accesso ai dati tramite la prop 'value'
        <GlobalContext.Provider value={{ tasks }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalProvider, GlobalContext };

// Esportiamo entrambi gli elementi:
// - GlobalProvider: per avvolgere i componenti che necessitano accesso al contesto
// - GlobalContext: per utilizzarlo nei componenti figli con useContext() e accedere ai dati