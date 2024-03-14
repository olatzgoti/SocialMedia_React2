//import { useState } from 'react'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import TheHeader from './components/Header/Header'
import Profile from './components/Profile/Profile'
import PostDetail from './components/Post/PostDetail/PostDetail'
import Search from './components/Search/Search'
import PrivateZone from './guards/PrivateZone'
import AdminZone from './guards/AdminZone'
import NotFound from './components/NotFound/NotFound'

function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <TheHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* {//} <Route path="/profile" element={<Profile />}/>//} */}
          <Route path="/admin" element={<AdminZone><Admin /></AdminZone>} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/search/:postName" element={<Search />} />
          <Route path="/profile" element={<PrivateZone> <Profile /> </PrivateZone>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
