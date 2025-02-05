import React from 'react'
import { Link } from 'react-router-dom'
import { GrCart } from "react-icons/gr";

function Item({id, name, image, old_price, new_price}) {
  return (
    <Link onClick={window.scrollTo(0, 0)} to={`/product/${id}`} className=' bg-container p-4 rounded-xl relative'>
        <div className='flexCenter'>
            <img src={image} alt='' height={211} width={211} className='rounded-lg drop-shadow-xl'/>
        </div>
        <div className='flex flex-col gap-y-2 pt-14'>
            <h4 className='line-clamp-2 '>{name}</h4>
            <p>Discover delicious cakes and cookies, freshly baked and delivered to your door.Ad?</p>
            <div className='flexBetween'>
                <div className='flex gap-x-4 '>
                    <span>₹{new_price}.00</span>
                    <span className='line-through text-red-800'>₹{old_price}.00</span>
                </div>
                <GrCart className='p-2 h-10 w-10 hover:text-red-700'/>
            </div>
        </div>   
    </Link>
  )
}

export default Item;