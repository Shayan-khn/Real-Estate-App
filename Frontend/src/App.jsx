import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (<BrowserRouter>
  <Header/>
  <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path='/Profile' element={<Profile/>}/>
        </Route>
        <Route path='/Signin' element={<SignIn/>}/>
        <Route path='/Signup' element={<SignUp/>}/>
  </Routes>    
  </BrowserRouter>
  )
}
