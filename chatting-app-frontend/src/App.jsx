import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from './components/Register/Register'
import CreateRoom from './components/ChatRoom/CreateRoom'
import ShowChat from './components/ChatRoom/ShowChat'
import NotFound from './components/NotFound/NotFound'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-in" element={<Register />} />
          <Route path="/create-room" element={<CreateRoom />} />
          <Route path="/show-chat" element={<ShowChat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
