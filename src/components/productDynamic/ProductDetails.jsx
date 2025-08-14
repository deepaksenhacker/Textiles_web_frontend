import React from 'react';
const ProductDetails = () => {
    const products = [
        {
            id: 1,
            name: "Rajasthani Safa",
            price: "₹120",
            description: "Rajasthani Safa Turban Cloth",
            image: "./turban1.jpg",
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
            image: "./turban2.jpg",
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
            image: "./turban3.jpg",
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
            image: "./turban4.jpg",
            minorder: 10,
            uses: "For Turban",
            text: "Printed",
            len: "Meter"
        },
    ];

    return (
        <div className='p-2 w-full gap-2  '>
              <h5 className='text-2xl text-orange-600'>Rajasthani Safa Turban Cloth</h5>
                    <h5 className='text-xl text-slate-400  '>80 INR / Drozen</h5>
            <div className="flex gap-10 flex-wrap justify-center">
          <div className="p-2">
        
          </div>
                <div className="p-4 border  justify-center">
                    <img src="/turban1.jpg" alt="" className=" lg:w-[20rem] w-[10rem] m-auto"/>
                    <div className="flex lg:gap-3 gap-1 mt-4">
                    <img src="/turban1.jpg" alt="" className=" w-16 lg:w-[5rem] p-2 border-4" />
                    <img src="/turban1.jpg" alt="" className=" w-16 lg:w-[5rem] p-2 border-4" />
                    <img src="/turban1.jpg" alt="" className=" w-16 lg:w-[5rem] p-2 border-4" />
                    <img src="/turban1.jpg" alt="" className=" w-16 lg:w-[5rem] p-2 border-4" />
                        
                    </div>
                </div>
                {/* 1 */}
                <div className="">
                    <h5 className='text-2xl text-orange-600'>Rajasthani Safa Turban Cloth</h5>
                    <h5 className='text-xl text-slate-400 mt-4 '>80 INR / Drozen</h5>


                    <table className=" border-green-600 m-1 text-xl mb-10   ">
                        <td className="border text-orange-600">
                            Product Description
                        </td>
                        <td className="border p-1">
                            Details
                        </td>

                        <tr className="border">
                            <td>Price</td>
                            <td>Rs.700</td>

                        </tr>
                        <tr className="border">
                            <td>Min Order</td>
                            <td>minorder</td>

                        </tr>
                        <tr className="border">
                            <td>Use</td>
                            <td>uses</td>

                        </tr>
                        <tr className="border">
                            <td>Texture</td>
                            <td>text</td>

                        </tr>
                        <tr className="border">
                            <td>Length</td>
                            <td>en</td>

                        </tr>




                    </table>
                    <div className="flex gap-4">

                        <button className='p-4 text-red-700 border-red-700 border hover:opacity-55'>
                            Inquiry This Product
                        </button>
                        <button className='p-4  hover:opacity-55 bg-red-700 text-white '>
                            Order Now
                        </button>

                    </div>

                </div>

                {/*1  */}
            </div>

        </div>
    );
}

export default ProductDetails;
