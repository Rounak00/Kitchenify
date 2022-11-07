

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer" 
import HomePage from "./pages/Home"
import LoginPage from "./pages/Login"
import RegisterPage from "./pages/Register"
import ErrorPage from "./pages/Error"

import './App.css'

function App() {
  
  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
