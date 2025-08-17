import React from 'react';
import HomeHero from '../components/HomeHero';
import { Fa0, FaCottonBureau } from 'react-icons/fa6';
import { MdArrowCircleLeft, MdArrowCircleRight, MdCropOriginal, MdSupervisorAccount, MdVerified } from 'react-icons/md';
import Layout from '../layouts/Layout';
import Products from '../components/Products';
import BreadCrumb from '../components/BreadCrumb';

const Home = () => {
  return (
    <>
      <BreadCrumb />

      {/* home title */}
      <div className="p-1 ">
        {/* 1 */}
        <div className="animation-up p-4 rounded ">
          <div className="">
            
          <h5 className=' lg:text-3xl text-xl'>Navkar <span className='text-pink-600'>Textile</span></h5>
          <p className='lg:text-sm  text-xs '>We Have The Best textile saare material Products</p>
        
          </div>
       
       
        </div>

        {/* 1 */}
        {/* 1 */}
      
      </div>
      {/* home ititle */}
      <HomeHero />

      <Layout>
        <Products />

      </Layout></>
  );
}

export default Home;
