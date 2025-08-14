import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



export const context = createContext()


export const MyContext = ({children})=>{

    const products = [
        {
          id: 1,
          name: "Rajasthani Safa",
          price: 120,
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
          price: 80,
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
          price: 150,
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
          price: 499,
          description: "Bright, soft, and stylish cotton t-shirt.",
          image: "./turban4.jpg",
          minorder: 10,
          uses: "For Turban",
          text: "Printed",
          len: "Meter"
        },
      ];

      const [cart, setCart] = useState([]);

      useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(savedCart);
      }, []);     



      const addCart = (id) => {
        const updatedCart = [...cart, id];
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        alert("Added to cart");
 
    };
    
      const removeCart = (id) => {
        const updatedCart = cart.filter(item => item !== id);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        alert("Removed product from cart");
      };

      const [cartItems, setCartItems] = useState([]);

    //   updating cart page


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
      const removeFromCart = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
    
        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        localStorage.setItem("cart", JSON.stringify(savedCart.filter((itemId) => itemId !== id)));
      };
    


const navigate =useNavigate();
// inqury
const InquirySend =(id)=>{
 const details= products[id-1];
 console.log(details);

 navigate('/inquiry',{state:details})

}








const [data, setdata] = useState(1001);
    return(
        <context.Provider value={{data,addCart,removeCart,products,cart,cartItems,removeFromCart,setCartItems,InquirySend}}>
            {children}
        </context.Provider>
    )
}