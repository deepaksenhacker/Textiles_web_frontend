import React from 'react';
import { GiRolledCloth } from 'react-icons/gi';
import { MdVerified } from 'react-icons/md';

const Videointro = () => {
    return (
        <>
            <div className='p-2 ' data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <div className=' text-white text-center p-3 lg:mt-[4rem] z-10 justify-center lg:flex lg:justify-between gap-10'>
                    <img src="/images/saree.png" alt="" className="m-auto h-24 lg:h-[20rem]" />
                    <div className="">
                        <h5 className=' text-xl  lg:text-6xl text-pink-600'>Navkar <span className='font-serif text-black'>Textiles PVT</span></h5>
                        <p className="text-[10px] lg:text-xl text-black">
                            When looking for Khadi Fabric, Dyed Roto Fabric, Cambric Fabric, Cotton Fabric, etc., in any popular motif or design, make sure to browse the selection offered by Nakoda Textiles. A Pali, Rajasthan based manufacturer, exporter and supplier, we offer endless variety in quality fabrics, also presenting amazing styles in Readymade Blouses, Ladies Petticoats and Wedding Turbans. With decades of experience in the textile manufacturing business, we know what is a hit and what is a miss. At our factory in Rajasthan, India, we create no less than textile masterpieces, additionally offering quick order shipping, worldwide.
                        </p>
                        <div className="mb-10 p-2  flex gap-3 items-center  lg:w-1/2 mt-10 rounded-full">
                          
                        {/* counter */}
                       
                       
                        </div>
                       
                    </div>
                </div>


             

            </div>


           

        </>
    );
}

export default Videointro;
