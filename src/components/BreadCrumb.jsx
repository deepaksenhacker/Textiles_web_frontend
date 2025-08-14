import React from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

const BreadCrumb = () => {
    const loc = useLocation()
    const prev =[...loc.pathname]
   const navigate = useNavigate()
    return (
        <>
            <div className={`flex flex-wrap gap-4 p-4 bg-pink-50 lg:sticky lg:top-0  lg:z-20 lg:mt-10 animation-up `}>
            <Link to={'/'}>/ Home</Link>    
                   
                    <Link onClick={()=>navigate(-1)}>{prev}</Link>    
           
            </div>
        </>
    );
}

export default BreadCrumb;
