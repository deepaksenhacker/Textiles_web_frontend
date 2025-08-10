import React from 'react';
import { FaCottonBureau } from 'react-icons/fa6';
import { MdSupervisorAccount, MdVerified } from 'react-icons/md';

const Trust = () => {
    return (
<div className="p-2 rounded-md flex gap-1">
<div className="rounded-s-xl w-fit p-2 h-11 border-2 ">
        <div className="flex items-center justify-center gap-2">
                <h5 className='text-yellow-500'>Original Products</h5>
                <MdVerified className=' text-green-500 text-3xl'/>
        
        </div>          
</div>
<div className=" w-fit p-2 h-11 border-2 bg-orange-400">
        <div className="flex items-center justify-center gap-2">
                <h5 className='text-white'>100% Cotton Products</h5>
                <FaCottonBureau className='text-white text-3xl'/>
        
        </div>          
</div>
<div className="rounded-e-xl w-fit p-2 h-11 border-2 bg-amber-200">
        <div className="flex items-center justify-center gap-2">
                <h5 className='text-yellow-700'>Trustable</h5>
                <MdSupervisorAccount className=' text-green-500 text-3xl'/>
        
        </div>          
</div>


</div>    );
}

export default Trust;
