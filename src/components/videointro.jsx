import React from 'react';
import { GiRolledCloth } from 'react-icons/gi';
import { MdVerified } from 'react-icons/md';

const Videointro = () => {
    return (
        <>
            <div className='p-2 ' data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <div className='absolute text-white text-center p-3 mt-[4rem] text-7xl z-10 flex justify-between gap-10'>
                    <img src="/images/saree.png" alt="" className="w-[30rem]" />
                    <div className="">
                        <h5 className='text-whitez text-6xl '>NEW <span className='font-serif text-yellow-300'>Textiles PVT</span></h5>
                        <p className="text-sm mx-3 text-black">
                            When looking for Khadi Fabric, Dyed Roto Fabric, Cambric Fabric, Cotton Fabric, etc., in any popular motif or design, make sure to browse the selection offered by Nakoda Textiles. A Pali, Rajasthan based manufacturer, exporter and supplier, we offer endless variety in quality fabrics, also presenting amazing styles in Readymade Blouses, Ladies Petticoats and Wedding Turbans. With decades of experience in the textile manufacturing business, we know what is a hit and what is a miss. At our factory in Rajasthan, India, we create no less than textile masterpieces, additionally offering quick order shipping, worldwide.
                        </p>
                        <div className="mb-10 p-2 border flex gap-3 items-center w-1/2 mt-14 bg-slate-50 rounded-full">
                            <MdVerified className='text-green-500'/>
                            <h4 className='text-2xl text-black'>Verified Brand</h4>
                        </div>
                        {/* counter */}
                        <div className="p-3 flex gap-3 justify-around w-full -mx-3 rounded-e-3xl mt-4 bg-yellow-500">
                            <div className="p-5 border bg-white rounded-e-3xl text-black -mt-6">
                                <h5 className='text-2xl'>Customer Reach</h5>
                                <p className="text-5xl">80,000 </p>
                            </div>
                            <div className="p-5 border bg-white rounded-e-3xl text-black -mt-6">
                                <h5 className='text-2xl'>Products Delivered</h5>
                                <p className="text-5xl">180,000 </p>
                            </div>
                            <div className="p-5 border bg-white rounded-e-3xl text-black -mt-6">
                                <h5 className='text-2xl'>Customer Reach</h5>
                                <p className="text-5xl">80,000 </p>
                            </div>
                        </div>
                    {/* counter */}
                    </div>
                </div>


                <video className='rounded-xl w-full opacity-45' autoPlay loop src="/video/video3.mp4"></video>
                {/* main */}


            </div>


            {/* 2 */}
            <div className="flex gap-4 mt-10 ">
                {/* 1 */}
                <div className="hover:translate-y-1 transition w-[15rem] border rounded-lg h-[15rem] border-b-4 border-orange-400 bg-zinc-50 ">

                    <div className="w-24 m-auto -translate-y-5 overflow-hidden h-24 border border-orange-400 bg-red-500">
                        <GiRolledCloth className="w-full h-full  object-cover text-red-50" />
                    </div>

                    <div className="p-2">
                        <h5 className="text-lg text-center font-bold text-red-500">Best Quality Fabric</h5>
                        <p className="text-xs mt-1">
                            When looking for Khadi Fabric, Dyed Roto Fabric, Cambric Fabric, Cotton Fabric, etc., in any popular motif or design</p>
                    </div>
                </div>
                {/* 1 */}

                {/* 1 */}
                <div className="hover:translate-y-1 transition w-[15rem] border rounded-lg h-[15rem] border-b-4 border-orange-400 bg-zinc-50 ">

                    <div className="w-24 m-auto -translate-y-5 overflow-hidden h-24 border border-orange-400 bg-red-500">
                        <img src='/images/design.jpg' className="w-full h-full  object-cover text-red-50" />
                    </div>

                    <div className="p-2">
                        <h5 className="text-lg text-center font-bold text-red-500">Best Dsign</h5>
                        <p className="text-xs mt-1">
                            Khadi Fabric, Dyed Roto Fabric, Cambric Fabric, Cotton Fabric, etc., in any popular motif or design</p>
                    </div>
                </div>
                {/* 1 */}

                {/* 1 */}
                <div className="hover:translate-y-1 transition w-[15rem] border rounded-lg h-[15rem] border-b-4 border-orange-400 bg-zinc-50 ">

                    <div className="w-24 m-auto -translate-y-5 overflow-hidden h-24 border border-orange-400 bg-red-500">
                        <img src='/images/turban.jpg' className="w-full h-full  object-cover text-red-50" />
                    </div>

                    <div className="p-2">
                        <h5 className="text-lg text-center font-bold text-red-500">Best Quality Fabric</h5>
                        <p className="text-xs mt-1">
                            When looking for Khadi Fabric, Dyed Roto Fabric, Cambric Fabric, Cotton Fabric, etc., in any popular motif or desig</p>
                    </div>
                </div>
                {/* 1 */}
            </div>

        </>
    );
}

export default Videointro;
