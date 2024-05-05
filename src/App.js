import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './Components/Cart/Cart';
import DeliveryInfo from './Components/DeliveryInfo/DeliveryInfo';
import ContactUs from './Components/ContactUs/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />}/>        
        <Route path='/cart' element={<Cart />}/> 
        <Route path='/order' element={<DeliveryInfo/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
