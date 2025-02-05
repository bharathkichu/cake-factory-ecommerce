import React from 'react';
import { useParams } from 'react-router-dom';
import all_products from '../assets/all_products';
import ProductWay from '../components/ProductWay';
import ProductDisplay from '../components/ProductDisplay';
import ProductDescription from '../components/ProductDescription';
import OurProducts from '../components/OurProducts';


function Product() {
  const{ productId } = useParams ();
  console.log("productId : ", productId);

  const product = all_products.find((e)=> e.id === Number(productId));
  if(!product) {
    return <div>Product not found!</div>
  }
  return (
    <section>
      <div>
        <ProductWay product={product}/>
        <ProductDisplay product={product}/>
        <ProductDescription product={product}/>
        <OurProducts/>
      </div>
    </section>
  )
}

export default Product;