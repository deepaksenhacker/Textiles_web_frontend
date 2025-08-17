import React, { use, useContext, useEffect, useState } from 'react';
import { MdFacebook, MdPhone, MdPhoneAndroid, MdVerified, MdWhatsapp, MdSupervisorAccount, MdArrowCircleRight, MdArrowBack, MdOutlineKeyboardArrowRight, MdClose, MdMenu, MdHouse, MdLabelOutline, MdCall, MdShoppingBag } from 'react-icons/md'
import { FaInstagram, FaCottonBureau, FaPhone, FaCartPlus, FaArrowRight, FaCross } from 'react-icons/fa6'

import { Link, useLocation } from 'react-router-dom';
import { GiShoppingBag } from 'react-icons/gi';
import { context } from '../MyContext/MyContext';
const Navbar = () => {


const {data,addCart,removeCart,products,cart,cartItems,removeFromCart,setCartItems} =useContext(context)









    const location = useLocation()

    // menu active

    const [menuproducts, setmenuproducts] = useState(false);

    // opener
    const [opener, setopener] = useState(false);
   
   


// counter







// cart
useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    
    // This array should be the same product list from Products.jsx
    

    const cartData = products.filter((p) => savedCart.includes(p.id));
    setCartItems(cartData);
  }, []);


   

   
   
   
   
   
   
   
   
   
   
    return (
        <>
            <div className="flex w-full items-center justify-between animation-up bg-pink-800 ">

                {opener &&

                    <div className={`w-full z-10 h-screen   top-0 animation-up bg-white fixed`}>

                        <div className="p-2 flex flex-col  gap-5 ">
                            <Link className="flex w-full p-3 border-b-2  gap-1 items-center justify-between">
                                <p className="">Navkar Textiles Company</p>
                                <MdClose className='text-2xl ' onClick={() => setopener(false)} />

                            </Link>
                            <a href="tel:7300457541" className="flex p-2  gap-1  items-center">
                                <MdCall className=' text-xl text-green-500' />
                                <p className="text-green-500"> +91-7300457541</p>
                            </a>
                            <div className="">
                                <img src="/images/logo.jpg" alt="" className="hover:opacity-35 transition m-auto w-32 bg-pink-100" />

                            </div>
                            <a href="tel:7300457541" className=" gap-3 items-center lg:flex hidden text-black p-2 border">
                                <MdWhatsapp className='text-2xl text-green-500' /> Chat With Us
                            </a>
                            <div className="p-4 flex flex-col gap-5 items-center justify-start lg:text-xl text-xs text-black">
                                <Link to={'/'} className="w-full  text-xl flex gap-1 items-center" onClick={() => setopener(false)}>
                                    <MdHouse className='text-pink-600' />
                                    Home
                                </Link>


                                <Link to={'/company-profile'} className="w-full  text-xl flex gap-1 items-center" onClick={() => setopener(false)}>
                                    <MdLabelOutline className='text-pink-600' />

                                    About us
                                </Link>
                                <a href={'#products'} className="w-full  text-xl flex gap-1 items-center" onClick={() => setopener(false)}>
                                    <MdArrowCircleRight className='text-pink-600' />

                                    Products
                                </a>
                                <a href="tel:7300457541" className="w-full  text-xl flex gap-1 items-center">
                                    <MdWhatsapp className='text-2xl text-green-500' /> Chat With Us
                                </a>

                            </div>
                            {/* box */}
                            <div className="p-2 flex justify-between border-t-2">
                                <button onClick={()=>localStorage.clear()} className="w-full  text-xl flex gap-1 items-center">
                                     Clear Cart
                                </button>
                                <Link to="/cart" className="w-full p-3 bg-pink-700  text-white text-xl flex gap-1 items-center">
                                    <MdShoppingBag className='text-2xl '/>  Cart
                                </Link>

                            </div>

                            {/* box */}
                        </div>
                    </div>


                }

                {/* 1 */}


                <div className="p-2 flex items-center lg:gap-5 gap-2 text-white">
                    <Link className=" gap-1 items-center lg:hidden block" onClick={() => setopener(true)}>
                        <MdMenu className='text-lg' />

                    </Link>

                    <a href="tel:7300457541" className=" gap-1 items-center lg:flex hidden">
                        <FaPhone className='text-2xl' />

                    </a>
                    <a href="https://wa.me/917300457541" target='_blank' className=" gap-3 items-center lg:flex hidden">
                        <MdWhatsapp className='text-2xl' /> Chat With Us
                    </a>
                    <div className="lg:p-4 p-3 flex lg:gap-5 gap-3 items-center lg:text-xl text-[10px] bg-pink-700">
                        <Link to={'/'} className="flex gap-1 items-center">
                            Home
                        </Link>
                        <a href={'#products'} className="flex gap-1 items-center hover:scale-95">
                            Products <MdOutlineKeyboardArrowRight />
                        </a>

                        <Link to={'/company-profile'} className="flex gap-1 items-center">
                            About us
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
                <div className="p-2 flex gap-5 text-white">
                    <Link to={'/cart'} className="flex gap-1 items-center">
                          <p className="lg:block hidden p-1 text-black bg-white rounded-full translate-x-4 translate-y-3 text-xs">{cartItems.length}</p>
                        <GiShoppingBag className=' text-3xl text-orange-500' />
                      
                    </Link>
                    <a href="tel:7300457541" className="lg:flex hidden gap-1 items-center">
                        <MdWhatsapp />
                        <p className="lg:block hidden">Chat with us</p>
                    </a>

                </div>
                {/* 2 */}

            </div>
            {/* navbar bottom */}
            {menuproducts &&
                <div className={`flex gap-3  p-8 border rounded-e-full  border-orange-500 bg-white ${menuproducts && 'animation-up  z-20 fixed'}`}>

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
