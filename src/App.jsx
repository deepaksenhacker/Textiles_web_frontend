import React, { useEffect } from 'react';
import { Route, Router, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import 'react-icons'
import ProductPage from './pages/ProductPage';
import CompanyProfile from './pages/CompanyProfile';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Cart from './pages/Cart';
import { MyContext } from './MyContext/MyContext';
import Inquiry from './pages/Inquiry';
// ..

const App = () => {
  AOS.init({
    duration: 500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  }); 
 
  const loc = useLocation();

  useEffect(()=>{
      window.scrollTo(0,0)
  },[loc.pathname])


  return (
    <>
    <MyContext>
    <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/product/:productid' element={<ProductPage/>}/>
              <Route path='/company-profile' element={<CompanyProfile/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/inquiry' element={<Inquiry/>}/>
              
              {/* not found */}
              {/* <Route path='/*'/> */}
              
          </Routes>
    </MyContext>
    </>
  );
}

export default App;
