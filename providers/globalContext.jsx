import { createContext } from "react"; // Importiamo createContext per creare il nostro contesto globale
const GlobalContext = createContext(); // Creiamo un Context che servirà come contenitore per i dati che vogliamo condividere ( Evita il props Drilling)
import { useTasks } from "../hooks/useTasks";  // Importiamo useTask per utilizzare il nostro custom hook

const GlobalProvider = ({ children }) => {

    const taskData = useTasks()

    return (
        // Il Provider avvolge i componenti figli e fornisce loro accesso ai dati tramite la prop 'value'
        <GlobalContext.Provider value={{ ...taskData }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalProvider, GlobalContext };

// Esportiamo entrambi gli elementi:
// - GlobalProvider: per avvolgere i componenti che necessitano accesso al contesto
// - GlobalContext: per utilizzarlo nei componenti figli con useContext() e accedere ai dati