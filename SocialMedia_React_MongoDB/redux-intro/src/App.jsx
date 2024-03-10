//import { useState } from 'react'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from  './components/Home/Home'
import TheHeader from './components/Header/Header'
import Profile from './components/Profile/Profile'
import PostDetail from './components/Post/PostDetail/PostDetail'

function App() {

  return (
    
    <div className="App">
      <BrowserRouter>
        <TheHeader/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/post/:id" element={<PostDetail/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  
  )
}

export default App
