import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import 'react-icons'
import ProductPage from './pages/ProductPage';
import CompanyProfile from './pages/CompanyProfile';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const App = () => {
  AOS.init({
    duration: 500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  }); 
 
  return (
    <>
    <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/product/:productid' element={<ProductPage/>}/>
              <Route path='/company-profile' element={<CompanyProfile/>}/>
              
              {/* not found */}
              {/* <Route path='/*'/> */}
              
          </Routes>
    </>
  );
}

export default App;
