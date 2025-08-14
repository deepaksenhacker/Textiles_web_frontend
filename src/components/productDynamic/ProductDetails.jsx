import React, { useContext } from 'react';
import { context } from '../../MyContext/MyContext';
import BreadCrumb from '../BreadCrumb';
import { useNavigate } from 'react-router-dom';
const ProductDetails = ({ productid }) => {



const {InquirySend} = useContext(context)

const navigate =useNavigate()

    const products = [
        {
            id: 1,
            name: "Rajasthani Safa",
            price: "₹120",
            description: "Rajasthani Safa Turban Cloth",
            image: "/turban1.jpg",
            minorder: 10,
            uses: "For Turban",
            text: "Printed",
            len: "Meter"
        },
        {
            id: 2,
            name: "Ready Safa Rajasthani",
            price: "₹80",
            description: "Safa And Turban cloths",
            image: "/turban2.jpg",
            minorder: 10,
            uses: "For Turban",
            text: "Printed",
            len: "Meter"
        },
        {
            id: 3,
            name: "Orange Candles",
            price: "₹150",
            description: "Scented candles with a relaxing citrus aroma.",
            image: "/turban3.jpg",
            minorder: 10,
            uses: "For Turban",
            text: "Printed",
            len: "Meter"
        },
        {
            id: 4,
            name: "Orange T-shirt",
            price: "₹499",
            description: "Bright, soft, and stylish cotton t-shirt.",
            image: "/turban4.jpg",
            minorder: 10,
            uses: "For Turban",
            text: "Printed",
            len: "Meter"
        },
    ];

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
