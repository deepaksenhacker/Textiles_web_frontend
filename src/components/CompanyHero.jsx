import React from 'react';
import { FaPhone } from 'react-icons/fa6';

import { GiRolledCloth } from 'react-icons/gi';
import { MdWhatsapp } from 'react-icons/md';
import Videointro from './videointro';

const CompanyHero = () => {
    return (


        <div className='w-full p-2  '>
            <div className="w-full p-2 flex flex-col gap-10  bg-gradient-to-t  ">



                {/* company hero */}

                <Videointro />

                {/* company hero */}

                {/* main */}
                <div className="w-full border-b-8 mb-4 p-3" data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                    {/* container */}
                    <div className="lg:flex gap-4 mb-4">


                        {/* 1 */}
                        <div className="lg:w-1/2">
                            <h5 className="lg:text-3xl text-orange-500 font-bold mb-3 mt-1">Best Saree Fabric - Khadi Fabric, Dyed Roto Fabric, Cambric Fabric, Cotton Fabric</h5>
                            <p className="text-sm p-2 text-slate-600">
                                When looking for Khadi Fabric, Dyed Roto Fabric, Cambric Fabric, Cotton Fabric, etc., in any popular motif or design, make sure to browse the selection offered by NEW Textiles. A Pali, Rajasthan based manufacturer, exporter and supplier, we offer endless variety in quality fabrics, also presenting amazing styles in Readymade Blouses, Ladies Petticoats and Wedding Turbans. With decades of experience in the textile manufacturing business, we know what is a hit and what is a miss. At our factory in Rajasthan, India, we create no less than textile masterpieces, additionally offering quick order shipping, worldwide.
                            </p>
                            <div className="w-fit flex gap-2 mt-4">
                               
                                <a href='tel:7300457541' className='hover:opacity-60   text-white transition flex items-center gap-3 p-2 border rounded bg-orange-500 '>
                                    <FaPhone className='text-2xl  animate-pulse' />
                                    Call
                                </a>

                            </div>
                        </div>


                        {/* 1 */}
                        <div className="lg:flex w-full gap-3">
                            <video src="/video/video2.mp4" autoPlay loop className=' rounded-3xl lg:w-[15rem]  object-cover border-2 '>

                            </video>
                            <video src="/video/video3.mp4" autoPlay loop className=' rounded-3xl lg:w-[33rem]  object-cover border-2 '>

                            </video>


                        </div>
                        {/* 1 */}
                        {/* 1 */}
                    </div>
                    {/* container */}

                    {/* container2 */}
                    <div className="lg:flex gap-4" data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                        {/* 1 */}
                        <video src="/video/video4.mp4" autoPlay={true} loop className=' rounded-3xl w-[40rem] border-2 '>

                        </video>
                        {/* 1 */}

                        {/* 1 */}
                        <div className="">
                            <h5 className="text-3xl text-orange-500 font-bold mb-3 mt-1">Best Saree Fabric - Khadi Fabric, Dyed Roto Fabric, Cambric Fabric, Cotton Fabric</h5>
                            <p className="text-sm p-2 text-slate-600">
                                When looking for Khadi Fabric, Dyed Roto Fabric, Cambric Fabric, Cotton Fabric, etc., in any popular motif or design, make sure to browse the selection offered by NEW Textiles. A Pali, Rajasthan based manufacturer, exporter and supplier, we offer endless variety in quality fabrics, also presenting amazing styles in Readymade Blouses, Ladies Petticoats and Wedding Turbans. With decades of experience in the textile manufacturing business, we know what is a hit and what is a miss. At our factory in Rajasthan, India, we create no less than textile masterpieces, additionally offering quick order shipping, worldwide.
                            </p>
                            <div className="w-fit flex gap-2 mt-4">
                                <a href='https://wa.me/917300457541' className='hover:opacity-60   text-white transition flex items-center gap-3 p-2 border rounded bg-green-500 '>
                                    <MdWhatsapp className='text-2xl  animate-pulse' />
                                    Send Inquiry
                                </a>

                                <a href='tel:7300457541' className='hover:opacity-60   text-white transition flex items-center gap-3 p-2 border rounded bg-orange-500 '>
                                    <FaPhone className='text-2xl  animate-pulse' />
                                    Call
                                </a>

                            </div>
                        </div>

                        {/* 1 */}
                    </div>
                    {/* container 2*/}








                </div>



            </div>
        </div>
    );
}

export default CompanyHero;
