

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer" 
import HomePage from "./pages/Home"
import NewsPage from './pages/NewsPage'
import LoginPage from "./pages/Login"
import RegisterPage from "./pages/Register"
import ErrorPage from "./pages/Error"
import AboutPage from './pages/AboutPage'
import CartPage from './pages/CartPage'
import ProductPage from './pages/ProductPage'
import SingleProductPage from './pages/SingleProductPage'
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
        <Route path="/product" element={<ProductPage />} />
             <Route path="/product/tools" element={<ProductPage />} />
             <Route path="/product/electronics" element={<ProductPage />} />
             <Route path="/product/appliances" element={<ProductPage />} />
             <Route path="/product/ovens" element={<ProductPage />} />
          <Route path="/single_product" element={<SingleProductPage />} />  
        <Route path="/news" element={<NewsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
