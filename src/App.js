import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import Cart from './Components/Cart/Cart';
import DeliveryInfo from './Components/DeliveryInfo/DeliveryInfo';
import ContactUs from './Components/ContactUs/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route  exact path='/' element={<Home />}/> 
        <Route exact path='/home' element={<Home />}/>        
        <Route exact path='/cart' element={<Cart />}/> 
        <Route exact path='/order' element={<DeliveryInfo/>}/>
        <Route exact path='/contact' element={<ContactUs/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
