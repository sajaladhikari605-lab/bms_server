// src/App.jsx
import "./App.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./components/Fotter"
import Navbar from "./components/Navbar"
import Create from "./pages/Create"
import Single from "./pages/Single"
import Update from "./pages/Update"

function App() {

  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar/>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/create" element={<Create/>} />
            <Route path="/update/:id" element={<Update/>} />
            <Route path="/single/:id" element={<Single/>} />
          
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
