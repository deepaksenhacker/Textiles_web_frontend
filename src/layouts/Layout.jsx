import React from 'react';
import { MdMale, MdOutlineTrendingUp, MdSearch } from 'react-icons/md';
import Advertise from '../components/Advertise';
import Advertise2 from '../components/Advertise2';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <>
            <div className="lg:flex  gap-2 w-full  justify-between">
                <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="w-fit mt-2 lg:sticky lg:top-0  border p-2 ">
                    <img src="./delivery2.jpg" alt="" className="h-[8rem] m-auto" />

                    <h5 className="animate-pulse text-xl mb-3 mt-2 flex gap-3 items-center text-orange-500">Trending Products <MdOutlineTrendingUp /></h5>


                    <div className="grid gap-3 ">
                        <a href="" className="hover:text-orange-500 gap-2 p-2 outline-2 border-b-2 outline-emerald-500 flex">
                            <MdOutlineTrendingUp />
                            Men Products</a>
                        <a href="" className="hover:text-orange-500 gap-2 p-2 outline-2 border-b-2 outline-emerald-500 flex">
                            <MdOutlineTrendingUp />
                            Turbans</a>       <a href="" className="hover:text-orange-500 gap-2 p-2 outline-2 border-b-2 outline-emerald-500 flex">
                            <MdOutlineTrendingUp />
                            Kanchipuram Saadi</a>       <a href="" className="hover:text-orange-500 gap-2 p-2 outline-2 border-b-2 outline-emerald-500 flex">
                            <MdOutlineTrendingUp />
                            Rajasthani Blouse Matrial</a>       <a href="" className="hover:text-orange-500 gap-2 p-2 outline-2 border-b-2 outline-emerald-500 flex">
                            <MdOutlineTrendingUp />
                            Gown And Pettikot</a>
                    </div>
                    <Advertise2 />

                </div>
                <div className="p-2 bg-white">
                    {children}
                </div>
                <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="lg:w-1/4 lg:block hidden mt-2 bg-slate-50 p-2 border">
                    <div className="flex  items-center p-2 rounded-full border border-orange-500 bg-slate-50">
                        <MdSearch className='text-3xl text-black' />
                        <input type="text" className='p-1 w-full outline-none bg-transparent  rounded-full' placeholder='Search Your Products Here !' />
                    </div>
                    <div className="mt-3 flex gap-4 p-2 flex-wrap ">
                        <a href="" className='flex hover:scale-110 hover:text-orange-500 transition gap-1 items-center p-1 border-b-2'>
                            <MdSearch />
                            <h4>Rajputi Posak</h4>
                        </a>
                        <a href="" className='flex hover:scale-110 hover:text-orange-500 transition gap-1 items-center p-1 border-b-2'>
                            <MdSearch />
                            <h4>Saree Matirial</h4>
                        </a>
                        <a href="" className='flex hover:scale-110 hover:text-orange-500 transition gap-1 items-center p-1 border-b-2'>
                            <MdSearch />
                            <h4>Rajasthani Safa</h4>
                        </a>
                        <a href="" className='flex hover:scale-110 hover:text-orange-500 transition gap-1 items-center p-1 border-b-2'>
                            <MdSearch />
                            <h4>Duppta</h4>
                        </a>
                        <a href="" className='flex hover:scale-110 hover:text-orange-500 transition gap-1 items-center p-1 border-b-2'>
                            <MdSearch />
                            <h4>Cotton martirial</h4>
                        </a>
                        <a href="" className='flex hover:scale-110 hover:text-orange-500 transition gap-1 items-center p-1 border-b-2'>
                            <MdSearch />
                            <h4>100% Cotton</h4>
                        </a>

                    </div>
                    {/* 2 */}
                    <div className="lg:block hidden mt-2 p-2">
                        <h5>Featured</h5>
                        <div className="mt-2 flex gap-2 flex-wrap">
                                <Link to={'/'} className="hover:scale-95">
                                    <img src="./KerryJoyce.jpg" alt="" className="w-20 hover:scale-110 transition" />
                                </Link>
                                <Link to={'/'} className="">
                                    <img src="./bannarasi.jpg" alt="" className="w-20 hover:scale-110 transition" />
                                </Link>
                                <Link to={'/'} className="">
                                    <img src="./matrial.jpg" alt="" className="w-20 hover:scale-110 transition" />
                                </Link>
                                <Link to={'/'} className="hover:scale-95">
                                    <img src="./KerryJoyce.jpg" alt="" className="w-20 hover:scale-110 transition" />
                                </Link>
                                <Link to={'/'} className="">
                                    <img src="./bannarasi.jpg" alt="" className="w-20 hover:scale-110 transition" />
                                </Link>
                                <Link to={'/'} className="">
                                    <img src="./matrial.jpg" alt="" className="w-20 hover:scale-110 transition" />
                                </Link>
                                <Link to={'/'} className="hover:scale-95">
                                    <img src="./KerryJoyce.jpg" alt="" className="w-20 hover:scale-110 transition" />
                                </Link>
                                <Link to={'/'} className="">
                                    <img src="./bannarasi.jpg" alt="" className="w-20 hover:scale-110 transition" />
                                </Link>
                                <Link to={'/'} className="">
                                    <img src="./matrial.jpg" alt="" className="w-20 hover:scale-110 transition" />
                                </Link>
                                
                        </div>
                    </div>
                    {/* 2 */}
                </div>

            </div>
        </>
    );
}

export default Layout;
