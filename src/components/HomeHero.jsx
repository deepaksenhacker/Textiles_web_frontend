import React from 'react';
import Advertise from './Advertise';
import { MdLocationCity, MdLocationPin, MdMenu } from 'react-icons/md';
import ContactForm from './ContactForm';

const HomeHero = () => {
 
  
  
  
  
  
  
  
    return (
        <div className='w-full lg:flex w-[870px]:flex-wrap justify-center gap-2 bg-neutral-100 p-2'>
            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" className="flex lg:gap-5 gap-2 justify-center items-center">
                <div className="w-60  border-b-4 rounded-2xl overflow-hidden border-yellow-400">
                    <video className='w-full h-full ' loop muted autoPlay='autoplay' >
                        <source src="./kanchi.mp4" type='video/mp4' />
                    </video>
                    <div className={`p-1 border text-xs transition hover:-translate-y-6 bg-white  rounded `} >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis maxime enim asperiores?
                    </div>
                </div>
                {/* 1 */}
                <div className="w p-1 flex flex-col lg:gap-3 gap-1">
                    <div className="lg:w-[12rem] w-[6rem] border-2 border-slate-400 rounded-2xl overflow-hidden">
                        <img src="./bannarasi.jpg" alt="" className='w-full h-full' />
                    </div>
                    <div className="lg:w-[12rem] w-[6rem] border-2 border-slate-400 rounded-2xl overflow-hidden">
                        <img src="./kanchi2.jpg" alt="" className='w-full h-full' />
                    </div>

                </div>
                {/* 2 */}
                <div className="w-60  border-b-4 rounded-2xl overflow-hidden border-yellow-400">
                    <video className='w-full h-full' loop muted autoPlay='autoplay' >
                        <source src="./kanchi1.mp4" type='video/mp4' />
                    </video>
                    <div className={`p-1 text-xs border transition hover:-translate-y-6 bg-white  rounded `} >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis maxime enim asperiores?
                    </div>
                </div>

                {/* 3 */}

            </div>

            {/* 2 */}
            <div data-aos="fade"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="bg-neutral-100 flex flex-col justify-between p-2 lg:w-1/2">
                {/* sliders */}
                

                <ContactForm />
                {/* 2 */}
                <div className="p-2 flex items-center gap-1  ">
                    <img src="./delivery.jpg" alt="" className="w-14 rounded-2xl" />
                    <div className="">
                        <h5 className='text-'>We Deliver <span className='text-orange-500'>All Over India </span><br /> </h5>
                        <div className="flex gap-2 items-center">
                            <MdLocationPin className='text-2xl text-red-500' />
                            <h5 className=''>India</h5>
                        </div>
                    </div>
                </div>
                {/* 2 */}

                {/* slider */}
                <div className="">
                    <Advertise />
                </div>
            </div>
        </div>
    );
}

export default HomeHero;
