import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { context } from "../MyContext/MyContext";

function Products() {
  const {data,addCart,removeCart,products,cart,setCartItems,InquirySend} =useContext(context)

 

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    
    // This array should be the same product list from Products.jsx
    const products = [
      {
        id: 1,
        name: "Rajasthani Safa",
        price: 120,
        image: "/turban1.jpg"
      },
      {
        id: 2,
        name: "Ready Safa Rajasthani",
        price: 80,
        image: "/turban2.jpg"
      },
      {
        id: 3,
        name: "Orange Candles",
        price: 150,
        image: "/turban3.jpg"
      },
      {
        id: 4,
        name: "Orange T-shirt",
        price: 499,
        image: "/turban4.jpg"
      },
    ];

    const cartData = products.filter((p) => savedCart.includes(p.id));
    setCartItems(cartData);
  }, []);

  

  return (
    <div className="py-1" id="products"> 
      <h1 className="text-3xl font-bold text-pink-600 text-center mb-4" >
        Our Products
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4 sticky">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white hover:border-orange-500 shadow-lg p-2 lg:hover:scale-105 transition-transform"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-[60%] m-auto object-fill rounded-xl mb-4"
              />
              <h2 className="text-sm font-semibold text-orange-700">
                {product.name}
              </h2>
              <p className="text-gray-600 text-xs mt-1 mb-2">
                {product.description}
              </p>
              <span className="font-bold text-orange-600 text-xs">
                ₹{product.price}
              </span>

              <div className="mt-2">
                <table className="border m-1 text-xs">
                  <thead>
                    <tr>
                      <th className="border text-orange-600 p-1">Description</th>
                      <th className="border p-1">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border">Price</td>
                      <td className="border">₹{product.price}</td>
                    </tr>
                    <tr>
                      <td className="border">Min Order</td>
                      <td className="border">{product.minorder}</td>
                    </tr>
                    <tr>
                      <td className="border">Use</td>
                      <td className="border">{product.uses}</td>
                    </tr>
                    <tr>
                      <td className="border">Texture</td>
                      <td className="border">{product.text}</td>
                    </tr>
                    <tr>
                      <td className="border">Length</td>
                      <td className="border">{product.len}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Link>

            <div className="mt-3 flex justify-between items-center">
              <button onClick={()=>InquirySend(product.id)} className="active:scale-110 text-sm transition rounded p-2">
                Inquiry
              </button>
              {cart.includes(product.id) ? (
                <button
                  onClick={() => removeCart(product.id)}
                  className="active:scale-110 text-sm flex gap-2 items-center transition rounded text-pink-500 p-2"
                >
                  <MdShoppingCart /> Remove
                </button>
              ) : (
                <button
                  onClick={() => addCart(product.id)}
                  className="active:scale-110 text-sm flex gap-2 items-center transition rounded text-pink-500 p-2"
                >
                  <MdShoppingCart /> Add cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
