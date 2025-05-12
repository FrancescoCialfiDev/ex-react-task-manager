import { createContext } from "react";
const GlobalContext = createContext(); // Creiamo un Context che servirà come contenitore per i dati che vogliamo condividere ( Evita il props Drilling)
import { useTasks } from "../hooks/useTasks";

const GlobalProvider = ({ children }) => {

    const { tasks, addTask, removeTask, updateTask } = useTasks()

    return (
        // Il Provider avvolge i componenti figli e fornisce loro accesso ai dati tramite la prop 'value'
        <GlobalContext.Provider value={{ tasks, addTask }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalProvider, GlobalContext };

// Esportiamo entrambi gli elementi:
// - GlobalProvider: per avvolgere i componenti che necessitano accesso al contesto
// - GlobalContext: per utilizzarlo nei componenti figli con useContext() e accedere ai dati