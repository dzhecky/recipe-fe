import { useState, useEffect } from 'react'
import { Navigate, Route, Routes, BrowserRouter, Link, useParams } from 'react-router-dom'
import Navbar from './components/Navbar'
import SearchMenu from './pages/allRecipes'
import DetailMenu from './pages/detailMenu'
import AddMenu from './pages/addMenu'


function Register(){
  return(
    <>
    <Navbar color='primary'></Navbar>
      <div className="container">
        <h1>Register</h1>
      </div>
    </>
  )
}
function Login(){
  return(
    <>
    <Navbar color='danger'></Navbar>
      <div className="container">
        <h1>Login</h1>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/searchMenu' replace={true} />}/>
          <Route path='/searchMenu' element={<SearchMenu />}/>
          <Route path='/menu-detail/:id' element={<DetailMenu />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/add-menu' element={<AddMenu />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
