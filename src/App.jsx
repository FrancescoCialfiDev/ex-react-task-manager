import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { DefautlLayout } from '../layout/DefaultLayout.jsx'
import { AddTask } from '../pages/AddTask.jsx'
import { TaskList } from '../pages/TaskList.jsx'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefautlLayout />}>
            <Route path='/' />
            <Route path='/addTask' element={<AddTask />} />
            <Route path='/taskList' element={<TaskList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
