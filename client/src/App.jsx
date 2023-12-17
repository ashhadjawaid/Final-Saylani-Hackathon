import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Students from './pages/Students/Students.jsx'
import Attendence from './pages/Attendence/Attendence.jsx'
import AddStudents from './pages/AddStudents/AddStudent.jsx'
import Public from './pages/Public.jsx'
import Signin from './pages/Signin/Signin'
import Layout from './Layout/Layout'



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Public />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<Students />} />
          <Route path='/addstudents' element={<AddStudents />} />
          <Route path='/attendence' element={<Attendence />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
