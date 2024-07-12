import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ShoppingCart from './components/ShoppingCart';
import Footer from './components/Footer';
import './App.css';
import Product from './components/product'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="Home-Section">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/product" element={<Product type="T-shirt" />} />
            
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
