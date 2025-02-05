import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import LATEST from '../assets/latest';
import 'swiper/css';
import { Link } from 'react-router-dom';
import { GrCart } from "react-icons/gr";

function RelatedProducts() {
  return (
    <div>
        <h4 className=' border-l-4 pl-2 border-orange-950 bold-20'>Related Products</h4>
        <div className='mx-auto max-w-full mt-4'>
          <Swiper breakpoints={{
            600:{
              slidesPerView : 2,
              spaceBetween : 30,
            },
            1024:{
              slidesPerView : 3,
              spaceBetween : 30,
            },

          }}className='h-[188px] mt-5'>
            {LATEST.map((item, i)=>(
              <SwiperSlide key={i}>
                <Link onClick={window.scrollTo(0, 0)} to={`/product/${item.id}`} className='flexCenter gap-x-5 bg-first p-8 rounded-xl'>
                  <img src={item.image} height={77} width={77} className='rounded-lg drop-shadow-xl'/>
                  <div className=' flex flex-col gap-y-1'>
                    <h4 className='line-clamp-1 medium-16  bold-22 text-amber-950'>{item.name}</h4>
                    <p className='line-clamp-1'> Discover delicious cakes and cookies, freshly baked and delivered to your door.Ad?</p>
                    <div className='flexBetween'>
                      <div className='flexBetween gap-x-2 medium-16'>
                        <span className='bold-15'>₹{item.new_price}.00</span>
                        <span className='line-through text-red-800 bold-15'>₹{item.old_price}.00</span>
                      </div>
                      <GrCart className='text-xl hover:text-red-700'/>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </div>
  )
}

export default RelatedProducts;