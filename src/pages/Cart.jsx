import { useState, useEffect, useContext } from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { context } from "../MyContext/MyContext";

function Cart() {
  

  const [quantity, setquantity] = useState(1);


  const {data,addCart,removeCart,products,cart,cartItems,removeFromCart,setCartItems} =useContext(context)

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






  // Remove from cart
 

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold">Your Cart is Empty 🛒</h2>
        <Link to="/" className="text-pink-500 underline mt-3 block">
          Go Shopping
        </Link>
      </div>
    );
  }


// order inquiry

const ordernow =()=>{

}



  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-pink-600 mb-6 text-center">Your Cart</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border p-3 rounded-lg shadow-md"
          >
            <div className="flex items-center gap-4">
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded object-cover border"
              />
              {/* Product Details */}
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">₹{item.price}</p>
              </div>
            </div>

            {/* quantity */}
      

            {/* Remove Button */}
            
         
                
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700 text-xl"
            >
              <MdDelete />
            </button>

            </div>

        ))}
      </div>

      {/* Total */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-inner flex justify-between items-center">
        <h2 className="text-lg font-semibold">Click for Order Inquiry:</h2>
        
      </div>

      {/* Checkout Button */}
      <button className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg">
        Order
      </button>
    </div>
  );
}

export default Cart;
