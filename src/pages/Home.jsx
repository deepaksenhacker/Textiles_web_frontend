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
      <div className="p-7 lg:flex  gap-64 justify-center ">
        {/* 1 */}
        <div className="lg:w-1/3">
          <h5 className='animation-up lg:text-3xl text-xl'>Navkar <span className='text-pink-700'>Textile</span></h5>
          <p className='lg:text-sm  text-xs '>We Have The Best textile saare material Products</p>
        
          <p className="text-xs mt-3 animation-up">
            Our textile company is dedicated to creating high-quality fabrics that combine tradition, innovation, and sustainability. With a strong foundation in craftsmanship, we specialize in producing a wide range of textiles, including cotton, silk, wool, and blended materials, catering to both domestic and international markets.

Equipped with advanced weaving, dyeing, and finishing technologies, we ensure every product meets the highest standards of durability, comfort, and style. Our design team stays ahead of trends, delivering fabrics that inspire creativity for fashion, home décor, and industrial applications.
.
            </p>
          <div className="">
            <div className="flex justify-center mt-14 -mx-2 gap-6  flex-wrap p-2  rounded-full">
              {/* 1 */}
              <div className="border p-1 lg:w-16 lg:h-16 h-12 w-12 rounded-full border-black ">
                <img src="./male.jpg" alt="" className='w-full h-full rounded-full' />
                <div className="">
                  <h5 className='lg:text-sm  text-[10px] text-center mt-2 text'>Mens</h5>
                </div>
              </div>

              {/* 1 */}
              {/* 1 */}
              <div className="border p-1 lg:w-16 lg:h-16 h-12 w-12 rounded-full border-black ">
                <img src="./female.jpg" alt="" className='w-full h-full rounded-full' />
                <div className="">
                  <h5 className='lg:text-sm  text-[10px] text-center mt-2 text'>Female</h5>
                </div>
              </div>

              {/* 1 */}

              {/* 1 */}
              {/* 1 */}
              <div className="border p-1 lg:w-16 lg:h-16 h-12 w-12 rounded-full border-black ">
                <img src="./saree.jpg" alt="" className='w-full h-full rounded-full' />
                <div className="">
                  <h5 className='lg:text-sm  text-[10px] text-center mt-2 text'>Sarees</h5>
                </div>
              </div>

              {/* 1 */}

              {/* 1 */}


              {/* 1 */}
              <div className="border p-1 lg:w-16 lg:h-16 h-12 w-12 rounded-full border-black ">
                <img src="./matrial.jpg" alt="" className='w-full h-full rounded-full' />
                <div className="">
                  <h5 className='lg:text-sm  text-[10px] text-center mt-2 text'>Textiles</h5>
                </div>
              </div>

              {/* 1 */}

            </div>

          </div>
        </div>

        {/* 1 */}
        {/* 1 */}
        <div className="">
          <img src="/images/logo.jpg" alt="" className="border p-2 lg:mt-0 mt-20 m-auto " />
          <div className="">
           
          </div>
        </div>

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
