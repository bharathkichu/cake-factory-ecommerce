import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

function ProductWay(props) {
    const {product} = props;
  return (
    <div className='max-padd-container flex items-center flex-wrap gap-x-2 py-4 capitalize bg-primary'>Home<FaLongArrowAltRight /> Shop <FaLongArrowAltRight /> {product.category} <FaLongArrowAltRight /> {product.name}</div>
  )
}

export default ProductWay;