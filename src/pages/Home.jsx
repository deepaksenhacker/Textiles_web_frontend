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

      {/* testimoninals */}
      <div className="p-6 border-b-4 bg-slate-50">
        <div className="border-b-4 p-4">
          <p className="text-xl text-orange-500">Testimoninals</p>
          <p className="">Our Products is used by expensive personalities there is here.</p>

        </div>
        {/* testimoninal */}
        <div className="mt-4 grid  lg:grid-cols-3  md:grid-cols-3 gap-4 sm:grid-cols-2 ">
          {/* 1 */}
          <div className="lg:w-[27rem] md:w-[15rem] bg-white hover:border-b-4 hover:border-b-orange-500 hover:translate-y-1 transition border-4 p-3 flex flex-col justify-center">
              <img src="/male.jpg" alt="" className="w-[6rem] p-1 border-4 border-orange-300 rounded-full m-auto mb-2"/>

            <p className="text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicierunt. Eius expedita harum recusandae magnam optio quibusdam dolores eveniet asperiores. Laudantium maxime facere numquam alias dolorem nesciunt velit, ad aut temporibus beatae!</p>
            <p className="font-bold text-xs text-center mt-4 text-orange-500">Vijay Kumar</p>
            <p className="font-bold text-sm text-center p-2 bg-orange-500 w-fit m-auto mt-3 text-white rounded-e-3xl">Business Man</p>
            
          </div>
          {/* 1 */}
           {/* 1 */}
          <div className="lg:w-[27rem] md:w-[15rem] bg-white hover:border-b-4 hover:border-b-orange-500 hover:translate-y-1 transition border-4 p-3 flex flex-col justify-center">
              <img src="/male.jpg" alt="" className="w-[6rem] p-1 border-4 border-orange-300 rounded-full m-auto mb-2"/>

            <p className="text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicierunt. Eius expedita harum recusandae magnam optio quibusdam dolores eveniet asperiores. Laudantium maxime facere numquam alias dolorem nesciunt velit, ad aut temporibus beatae!</p>
            <p className="font-bold text-xs text-center mt-4 text-orange-500">Vijay Kumar</p>
            <p className="font-bold text-sm text-center p-2 bg-orange-500 w-fit m-auto mt-3 text-white rounded-e-3xl">Business Man</p>
            
          </div>
          {/* 1 */}
          {/* 1 */}
          <div className="lg:w-[27rem] md:w-[15rem] bg-white hover:border-b-4 hover:border-b-orange-500 hover:translate-y-1 transition border-4 p-3 flex flex-col justify-center">
              <img src="/male.jpg" alt="" className="w-[6rem] p-1 border-4 border-orange-300 rounded-full m-auto mb-2"/>

            <p className="text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicierunt. Eius expedita harum recusandae magnam optio quibusdam dolores eveniet asperiores. Laudantium maxime facere numquam alias dolorem nesciunt velit, ad aut temporibus beatae!</p>
            <p className="font-bold text-xs text-center mt-4 text-orange-500">Vijay Kumar</p>
            <p className="font-bold text-sm text-center p-2 bg-orange-500 w-fit m-auto mt-3 text-white rounded-e-3xl">Business Man</p>
            
          </div>
          {/* 1 */}
          {/* 1 */}
          <div className="lg:w-[27rem] md:w-[15rem] bg-white hover:border-b-4 hover:border-b-orange-500 hover:translate-y-1 transition border-4 p-3 flex flex-col justify-center">
              <img src="/male.jpg" alt="" className="w-[6rem] p-1 border-4 border-orange-300 rounded-full m-auto mb-2"/>

            <p className="text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicierunt. Eius expedita harum recusandae magnam optio quibusdam dolores eveniet asperiores. Laudantium maxime facere numquam alias dolorem nesciunt velit, ad aut temporibus beatae!</p>
            <p className="font-bold text-xs text-center mt-4 text-orange-500">Vijay Kumar</p>
            <p className="font-bold text-sm text-center p-2 bg-orange-500 w-fit m-auto mt-3 text-white rounded-e-3xl">Business Man</p>
            
          </div>
          {/* 1 */}
        </div>

      </div>

      {/* testmoninals */}

      <Layout>
        <Products />

      </Layout>


    </>
  );
}

export default Home;
