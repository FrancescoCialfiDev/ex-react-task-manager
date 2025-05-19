import { BrowserRouter, Route, Routes } from 'react-router-dom' // Importiamo i componenti necessari per il routing di React
import { DefautlLayout } from '../layout/DefaultLayout.jsx' // Importiamo il layout principale dell'applicazione
import { AddTask } from '../pages/AddTask.jsx' // Componente per aggiungere nuove attività
import { TaskList } from '../pages/TaskList.jsx' // Componente per visualizzare la lista delle attività
import { GlobalProvider } from '../providers/globalContext.jsx' // Provider del contesto globale per la gestione e l'accesso ai dati
import SinglePageDetails from '../pages/singleTaskDetails.jsx'
import "bootstrap/dist/css/bootstrap.min.css" // Importiamo gli stili di Bootstrap
import './App.css' // Importiamo gli stili personalizzati


/**
 * Componente principale dell'applicazione che configura:
 * - Il provider del contesto globale
 * - Il sistema di routing dell'applicazione
 * - La struttura base delle pagine con il layout predefinito
 */

function App() {
  return (
    <>
      <GlobalProvider>                                                              {/* GlobalProvider avvolge l'intera applicazione per condividere lo stato globale */}
        <BrowserRouter>
          <Routes>
            <Route element={<DefautlLayout />}>                                     {/* Route principale che applica il layout predefinito a tutte le pagine */}
              <Route path='/' element={<></>} />                                    {/* Pagina iniziale (homepage) - attualmente senza contenuto specifico */}
              <Route path='/task/:id' element={<SinglePageDetails />} />            {/* Pagina iniziale (homepage) - attualmente senza contenuto specifico */}
              <Route path='/addTask' element={<AddTask />} />                       {/* Pagina per aggiungere una nuova attività */}
              <Route path='/taskList' element={<TaskList />} />                     {/* Pagina per visualizzare la lista delle attività */}
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App