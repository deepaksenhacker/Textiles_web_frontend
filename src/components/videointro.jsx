import React from 'react';
import { GiRolledCloth } from 'react-icons/gi';
import { MdVerified } from 'react-icons/md';

const Videointro = () => {
    return (
        <>
            <div className='p-2 ' data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <div className='absolute text-white text-center p-3 lg:mt-[4rem] z-10 justify-center lg:flex lg:justify-between gap-10'>
                    <img src="/images/saree.png" alt="" className="m-auto w-[10rem] lg:w-[20rem] lg:h-[20rem]" />
                    <div className="">
                        <h5 className='text-white text-xl  lg:text-6xl '>NEW <span className='font-serif text-yellow-300'>Textiles PVT</span></h5>
                        <p className="text-[10px] lg:text-sm lg:mx-3 mx-5 text-black">
                            When looking for Khadi Fabric, Dyed Roto Fabric, Cambric Fabric, Cotton Fabric, etc., in any popular motif or design, make sure to browse the selection offered by Nakoda Textiles. A Pali, Rajasthan based manufacturer, exporter and supplier, we offer endless variety in quality fabrics, also presenting amazing styles in Readymade Blouses, Ladies Petticoats and Wedding Turbans. With decades of experience in the textile manufacturing business, we know what is a hit and what is a miss. At our factory in Rajasthan, India, we create no less than textile masterpieces, additionally offering quick order shipping, worldwide.
                        </p>
                        <div className="mb-10 p-2  flex gap-3 items-center  lg:w-1/2 mt-10 rounded-full">
                          
                        {/* counter */}
                        <div className="p-3 lg:flex gap-3 justify-around w-full -mx-3 rounded-e-3xl lg:mt-4 bg-yellow-500">
                            <div className="p-5 border bg-white lg:rounded-e-3xl text-black -mt-6">
                                <h5 className='text-[10px] lg:text-2xl'>Customer Reach</h5>
                                <p className="text-[14px] lg:text-5xl">80,000 </p>
                            </div>
                            <div className="p-5 border bg-white lg:rounded-e-3xl text-black -mt-6">
                                <h5 className='text-[10px] lg:text-2xl'>Products Delivered</h5>
                                <p className="text-[14px] lg:text-5xl">180,000 </p>
                            </div>
                            <div className="p-5 border bg-white lg:rounded-e-3xl text-black -mt-6">
                                <h5 className='text-[10px] lg:text-2xl'>Customer Reach</h5>
                                <p className="text-[14px] lg:text-5xl">80,000 </p>
                            </div>
                        </div>
                    {/* counter */}
                       
                        </div>
                        {/* counter */}
                        <div className="p-3 lg:flex hidden gap-3 justify-around w-full -mx-3 rounded-e-3xl lg:mt-4 bg-yellow-500">
                            <div className="p-5 border bg-white rounded-e-3xl text-black -mt-6">
                                <h5 className='text-lg lg:text-2xl'>Customer Reach</h5>
                                <p className="text-xl lg:text-5xl">80,000 </p>
                            </div>
                            <div className="p-5 border bg-white rounded-e-3xl text-black -mt-6">
                                <h5 className='text-lg lg:text-2xl'>Products Delivered</h5>
                                <p className="text-xl lg:text-5xl">180,000 </p>
                            </div>
                            <div className="p-5 border bg-white rounded-e-3xl text-black -mt-6">
                                <h5 className='text-lg lg:text-2xl'>Customer Reach</h5>
                                <p className="text-xl lg:text-5xl">80,000 </p>
                            </div>
                        </div>
                    {/* counter */}
                    </div>
                </div>


               <div className="w-full h-screen ">
               <video className='rounded-xl object-cover w-full h-full opacity-45' autoPlay loop src="/video/video3.mp4"></video>
               
               </div>
                {/* main */}


            </div>


           

        </>
    );
}

export default Videointro;
