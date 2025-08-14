import React from 'react';
import ProductDetails from '../components/productDynamic/ProductDetails';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const {id}= useParams();
  
 
    return (
        <>
      <div className="p-2">
             <ProductDetails productid={id}/>
   
      </div> 
        </>
    );
}

export default ProductPage;
