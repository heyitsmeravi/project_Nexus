// import { useState } from 'react'
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Dashboard from "./pages/Dashboard";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </>
  )
}

export default App
