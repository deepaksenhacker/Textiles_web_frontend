import React, { useContext } from 'react';
import { context } from '../../MyContext/MyContext';
import BreadCrumb from '../BreadCrumb';
import { useNavigate } from 'react-router-dom';
const ProductDetails = ({ productid }) => {



const {InquirySend,products} = useContext(context)

const navigate =useNavigate()

    

    return (
        <>
           <BreadCrumb/>
            {products.map((items, index) =>{
                        return (
                           items.id==productid && (
                             <div className='p-2 w-full gap-2  ' key={items.id}>
                            <h5 className='text-2xl text-orange-600'>{items.name}</h5>
                            <h5 className='text-xl text-slate-400  '>{items.price}</h5>
                            <div className="flex gap-10 flex-wrap justify-center">
                                <div className="p-2">
        
                                </div>
                                <div className="p-4 border  justify-center">
                                    <img src={items.image} alt="" className=" lg:w-[20rem] w-[10rem] m-auto" />
                                   
                                </div>
                                {/* 1 */}
                                <div className="">
                                    <h5 className='text-2xl text-orange-600'>{items.name}</h5>
                                    <h5 className='text-xl text-slate-400 mt-4 '>{items.description}</h5>
        
        
                                    <table className=" border-green-600 m-1 text-xl mb-10   ">
                                        <td className="border text-orange-600">
                                           {items.description}
                                        </td>
                                        <td className="border p-1">
                                            Details
                                        </td>
        
                                        <tr className="border">
                                            <td>Price</td>
                                            <td>{items.price}</td>
        
                                        </tr>
                                        <tr className="border">
                                            <td>Min Order</td>
                                            <td>{items.minorder}</td>
        
                                        </tr>
                                        <tr className="border">
                                            <td>Use</td>
                                            <td>{items.uses}</td>
        
                                        </tr>
                                        <tr className="border">
                                            <td>Texture</td>
                                            <td>{items.text}</td>
        
                                        </tr>
                                        <tr className="border">
                                            <td>Length</td>
                                            <td>{items.len}</td>
        
                                        </tr>
        
        
        
        
                                    </table>
                                    <div className="flex gap-4">
        
                                        <button onClick={()=>InquirySend(items.id)} className='p-4 bg-red-700 text-white border-red-700 border hover:opacity-55'>
                                            Inquiry This Product
                                        </button>
                                        <button onClick={()=>navigate(-1)} className='p-4  hover:opacity-55 bg-red-700 text-white '>
                                            Back
                                        </button>
        
                                    </div>
        
                                </div>
        
                                {/*1  */}
                            </div>
        
                        </div>
                           )
                            
                        )}
            )}



            {/* product */}


















        </>
    );
}

export default ProductDetails;
