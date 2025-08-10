import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Rajasthani Safa",
    price: "₹120",
    description: "Rajasthani Safa Turban Cloth",
    image: "./turban1.jpg",
    minorder:10,
    uses:"For Turban",
    text:"Printed",
    len:"Meter"  
},
  {
    id: 2,
    name: "Ready Safa Rajasthani",
    price: "₹80",
    description: "Safa And Turban cloths",
    image: "./turban2.jpg",
    minorder:10,
    uses:"For Turban",
    text:"Printed",
    len:"Meter"  
  },
  {
    id: 3,
    name: "Orange Candles",
    price: "₹150",
    description: "Scented candles with a relaxing citrus aroma.",
    image: "./turban3.jpg",
    minorder:10,
    uses:"For Turban",
    text:"Printed",
    len:"Meter"  
  },
  {
    id: 4,
    name: "Orange T-shirt",
    price: "₹499",
    description: "Bright, soft, and stylish cotton t-shirt.",
    image: "./turban4.jpg",
    minorder:10,
    uses:"For Turban",
    text:"Printed",
    len:"Meter"  
  },
];

function Products() {
  return (
    <div  className="bg-orange-50  py-1">
      <h1 className="text-3xl font-bold text-orange-600  text-center mb-4">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4 sticky">
        {products.map((product) => (
          <Link to={`/product/${product.id}`}
            key={product.id}
            className="bg-white hover:border-orange-500 rounded-2xl shadow-lg p-2 hover:scale-105 transition-transform"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-fit h-[10rem] m-auto object-fill rounded-xl mb-4"
            />
            <h2 className="text-lg font-semibold text-orange-700 ">{product.name}</h2>
            <p className="text-gray-600 text-xs mt-1 mb-2">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-orange-600 text-xs">{product.price}</span>
             
              
            </div>
            {/* description */}
            <div className="">
              <table className=" border-green-600 m-1 text-xs   ">
                <td className="border text-orange-600">
                    Product Description
                </td>
                <td className="border p-1">
                     Details
                </td>
            
                <tr className="border">
                    <td>Price</td>
                    <td>Rs.{product.price}</td>
                
                </tr>
                <tr className="border">
                    <td>Min Order</td>
                    <td>{product.minorder}</td>
                
                </tr>
                <tr className="border">
                    <td>Use</td>
                    <td>{product.uses}</td>
                
                </tr>
                <tr className="border">
                    <td>Texture</td>
                    <td>{product.text}</td>
                
                </tr>
                <tr className="border">
                    <td>Length</td>
                    <td>{product.len}</td>
                
                </tr>
                

                

              </table>
            </div>
            <div className="mt-3">
                <button className="active:scale-110 text-sm transition rounded text-white p-1 bg-orange-500 ">Send Inquiry</button>
            </div>
            {/* description */}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Products