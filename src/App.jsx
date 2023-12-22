import { useState, useEffect } from 'react'
import { Navigate, Route, Routes, BrowserRouter, Link, useParams } from 'react-router-dom'
import SearchMenu from './pages/home/allRecipes'
import EditMenu from './pages/editMenu'
import DetailMenu from './pages/detailMenu'
import AddMenu from './pages/addMenu'
import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/homeLand'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/home' replace={true} />}/>
          <Route path='/searchMenu' element={<SearchMenu />}/>
          <Route path='/menu-detail/:id' element={<DetailMenu />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/add-menu' element={<AddMenu />}/>
          <Route path='/edit-menu/:id' element={<EditMenu />}/>
          <Route path='/home' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
