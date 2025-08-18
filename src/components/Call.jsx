import React from 'react';
import { MdChat, MdOutlineQueryStats, MdPhone } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Call = () => {
    return (
        <div className='justify-between rounded-xl  shadow-xl border p-4 flex bg-white w-full gap-5 bottom-0 fixed lg:hidden md:hidden '>
        <Link to={'/inquiry-page'} className='p-3 flex rounded-xl hover:bg-orange-500 gap-4 items-center bg-orange-600 text-white'>
            <MdChat/> Send Inquiry Form
        </Link>
        <a href='tel:+917300457541' className=' border border-orange-600 p-3 w-1/3 flex gap-4 items-center rounded-e bg-white text-orange-600'>
            <MdPhone/> Call     </a>
        
        </div>
    );
}

export default Call;
