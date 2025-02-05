import React, { useContext } from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { ShopContext } from '../context/ShopContext';

function ProductDisplay(props) {
    const { product } = props;
    const { addToCart } = useContext(ShopContext)
  return (
    <section className='max-padd-container flex flex-col gap-5 xl:flex-row bg-primary py-3'>
        <div className='flex w-auto h-auto '>
            <img src={product.image} alt='productimage' className='max-h-80 rounded-xl bg-container'/>
        </div>
        <div className='flex-col flex xl:flex-[1.5] bg-container py-2 rounded-xl px-5'>
            <h3>{product.name}</h3>
            <div className='flex items-start gap-x-2 medium-16'>
               <FaStar /> 
               <FaStar />
               <FaStar />
               <FaRegStarHalfStroke />
               <MdOutlineStarBorderPurple500 />
               <p>(3.5)</p>
            </div>
            <div className='flex items-baseline gap-x-6 bold-24 sm:bold-28 mt-4 '>
                <div>₹{product.new_price}.00</div>
                <div className='bold-20 sm:bold-22 line-through text-red-900'>₹{product.old_price}.00</div>
            </div>
            <div>
                <div className='flex flex-col sm:flex-row gap-x-10 gap-y-3 my-3'>
                    <h4 className='bold-16 sm:mt-3'>Select Size :</h4>
                    <div className='flex gap-3 my-2'>
                        <div className='ring-2 ring-amber-950 h-10 w-10 flexCenter cursor-pointer rounded-md'>1kg</div>
                        <div className='ring-2 ring-amber-950 h-10 w-10 flexCenter cursor-pointer rounded-md'>1.5kg</div>
                        <div className='ring-2 ring-amber-950 h-10 w-10 flexCenter cursor-pointer rounded-md'>2kg</div>
                        <div className='ring-2 ring-amber-950 h-10 w-10 flexCenter cursor-pointer rounded-md'>2.5kg</div>
                    </div>
                </div>
            </div>
            <div className='flex mb-5 max-w-[555px]'>
                <button onClick={()=>{addToCart(product.id)}} className='btn-dark rounded-md'>Add to cart</button>
            </div>
        </div>
    </section>
  )
}

export default ProductDisplay;