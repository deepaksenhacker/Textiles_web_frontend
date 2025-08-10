import React from 'react';
import { FaInstagram } from 'react-icons/fa6';
import { MdFacebook, MdVerified, MdWhatsapp } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Advertise2 = () => {
    return (
        <div className="rounded-xl navbar p-2   w-full bg-neutral-100 border-b-2 border-green-500">
<ul className='flex justify-between '>
    <div className="p-2 flex items-center gap-2">
    <div className="w-14 border-2 hover:scale-105 transition rounded-xl overflow-hidden  border-b-orange-500">
        <img src="https://images.scalebranding.com/clothes-shop-logo-aebb9a20-20d4-47d3-b432-bb812d21d8d3.jpg" alt="" className="h-full w-full object-cover" />
    </div>
        <h5 className=''>NEW <br></br> <span className='font-serif text-yellow-600'>Textiles PVT</span></h5>
    </div>

    {/* 1 */}

    {/* inquiry */}

    <div className="block  items-center text-xs gap-1">
        <h5 className='hover:scale-75 transition flex items-center gap-3 p-2 border rounded-2xl bg-white '>
            <MdVerified className='text-2xl text-green-500 animate-pulse'/>
            Trusted Seller
        </h5>
        <h5 className='hover:scale-75  text-white transition flex items-center gap-3 p-2 border rounded-2xl bg-orange-500 '>
            <MdWhatsapp className='text-2xl  animate-pulse'/>
            Send Inquiry
        </h5>
        
    </div>
    {/* 2 */}
  

   
    
    {/* 3 */}
    <div className="flex items-center gap-4 text-xl">
      
      
        <a href={'/'}>
            <MdWhatsapp  className='text-3xl' />
        </a>
    </div>

</ul>
</div>
    );
}

export default Advertise2;
