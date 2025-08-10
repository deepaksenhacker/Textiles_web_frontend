import React, { use, useState } from 'react';
import { MdFacebook, MdPhone, MdPhoneAndroid, MdVerified, MdWhatsapp, MdSupervisorAccount, MdArrowCircleRight, MdArrowBack, MdOutlineKeyboardArrowRight, MdClose, MdMenu } from 'react-icons/md'
import { FaInstagram, FaCottonBureau, FaPhone, FaCartPlus, FaArrowRight, FaCross } from 'react-icons/fa6'

import { Link, useLocation } from 'react-router-dom';
import { GiShoppingBag } from 'react-icons/gi';
const Navbar = () => {
    const location = useLocation()

    // menu active

    const [menuproducts, setmenuproducts] = useState(false);

    // opener
    const [opener, setopener] = useState(false);
    return (
        <>
            <div className="flex w-full items-center justify-between sticky top-0 z-10 bg-pink-800 text-white">

               {opener&&
             
                <div className="w-1/2 z-10 h-screen top-0 animation-up bg-white absolute">
                    
                <div className="p-2 flex flex-col  gap-5 ">
                    <Link className="flex gap-1 items-center justify-end">
                        <MdClose className='text-2xl text-black ' onClick={()=>setopener(false)}/>

                    </Link>

                    <div className="">
                    <img src="/images/logo.jpg" alt="" className="hover:opacity-35 transition m-auto w-24 border border-orange-500 bg-pink-100" />
                </div>
                    <a href="tel:7300457541" className=" gap-3 items-center lg:flex hidden text-black p-2 border">
                        <MdWhatsapp className='text-2xl text-green-500' /> Chat With Us
                    </a>    
                    <div className="p-4 flex flex-col gap-5 items-center lg:text-xl text-xs text-black">
                        <Link to={'/'} className="flex gap-1 items-center">
                            Home
                        </Link>
                   

                        <Link to={'/about-us'} className="flex gap-1 items-center">
                            About Us
                        </Link>

                    </div>

                </div>
                </div>
              

               }
               
                {/* 1 */}

              
                <div className="p-2 flex items-center lg:gap-5 gap-2">
                    <Link className=" gap-1 items-center lg:hidden block" onClick={()=>setopener(true)}>
                        <MdMenu className='text-lg' />

                    </Link>

                    <a href="tel:7300457541" className=" gap-1 items-center lg:flex hidden">
                        <FaPhone className='text-2xl' />

                    </a>
                    <a href="tel:7300457541" className=" gap-3 items-center lg:flex hidden">
                        <MdWhatsapp className='text-2xl' /> Chat With Us
                    </a>
                    <div className="lg:p-4 p-3 flex lg:gap-5 gap-3 items-center lg:text-xl text-[10px] bg-pink-700">
                        <Link to={'/'} className="flex gap-1 items-center">
                            Home
                        </Link>
                        <Link to={'/about-us'} className="flex gap-1 items-center hover:scale-95" onMouseOver={() => setmenuproducts(true)}>
                            Products <MdOutlineKeyboardArrowRight />
                        </Link>

                        <Link className="flex gap-1 items-center">
                            About Us
                        </Link>

                    </div>

                </div>

                {/* 1 */}

                {/* LOGO */}
                <div className="lg:translate-y-7">
                    <img src="/images/logo.jpg" alt="" className="hover:opacity-35 transition  w-14 lg:w-24 border border-orange-500 bg-pink-100" />
                </div>
                {/* LOGO */}
                {/* 2 */}
                <div className="p-2 flex gap-5">
                    <a href="tel:7300457541" className="flex gap-1 items-center">
                        <GiShoppingBag className=' text-3xl text-orange-500' />
                        <p className="lg:block hidden">Cart</p>
                    </a>
                    <a href="tel:7300457541" className="lg:flex hidden gap-1 items-center">
                        <MdWhatsapp />
                        <p className="lg:block hidden">Chat with us</p>
                    </a>

                </div>
                {/* 2 */}

            </div>
            {/* navbar bottom */}
            {menuproducts &&
                <div className={`flex gap-3  p-8 border rounded-e-full  border-orange-500 bg-white ${menuproducts && 'animation-up  z-10 fixed'}`}>

                    <div className="flex gap-4 text-xs flex-wrap">
                        {/*  1*/}
                        <div className="flex gap-3">
                            <Link to={'/'} className='hover:opacity-30 transition'> Safa Products  </Link>
                            <div className="w-[4px] h-7 bg-gray-300 rounded bg">

                            </div>
                        </div>
                        {/* 1 */}
                        {/*  1*/}
                        <div className="flex gap-3">
                            <Link to={'/'} className='hover:opacity-30 transition'> Men Products </Link>
                            <div className="w-[4px] h-7 bg-gray-300 rounded bg">

                            </div>
                        </div>
                        {/* 1 */}
                        {/*  1*/}
                        <div className="flex gap-3">
                            <Link to={'/'} className='hover:opacity-30 transition'> Women Products </Link>
                            <div className="w-[4px] h-7 bg-gray-300 rounded bg">

                            </div>
                        </div>
                        {/* 1 */}
                        {/*  1*/}
                        <div className="flex gap-3">
                            <Link to={'/'} className='hover:opacity-30 transition'> Banarasi Saare </Link>
                            <div className="w-[4px] h-7 bg-gray-300 rounded bg">

                            </div>
                        </div>
                        {/* 1 */}
                        {/*  1*/}
                        <div className="flex gap-3">
                            <Link to={'/'} className='hover:opacity-30 transition'> Cotton Material </Link>
                            <div className="w-[4px] h-7 bg-gray-300 rounded bg">

                            </div>
                        </div>
                        {/* 1 */}
                        {/*  1*/}
                        <div className="flex gap-3 items-center text-orange-500" onMouseOver={() => setmenuproducts(false)}>
                            <MdClose />
                        </div>
                        {/* 1 */}

                    </div>


                </div>

            }



        </>
    );
}

export default Navbar;
