import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './pages/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import HejjRegistration from './pages/HejjRegistration'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Admin'
import Registors from './pages/Registors'
import Users from './pages/Users'
import Profile from './pages/Profile'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

window.toast = toast; // Make toast globally available

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Admin' element={<Dashboard />} />
        <Route path='/Admin/users' element={<Users />} />
        <Route path='/Admin/registers' element={<Registors />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/hejj_registration' element={<HejjRegistration />} />
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      <ToastContainer position="top-right" autoClose={1500} />
    </>
  )
}

export default App
