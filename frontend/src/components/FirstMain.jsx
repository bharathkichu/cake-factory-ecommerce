import React from 'react'
import { Link } from 'react-router-dom'
import RelatedProducts from './RelatedProducts'

function FirstMain() {
  return (
    <section>
        <div className='max-padd-container bg-FirstMain bg-cover bg-no-repeat h-[744px] w-full'>
            <div className='relative top-52 '>
                <h4 className='medium-20 -tracking-wider text-black'>CAKES FOR EVERY TASTE</h4>
                <h2 className='h1 capitalize max-w-[40rem]  text-black'>Order <span className='text-amber-950'>CUSTOM</span> cakes that spark <span className='text-amber-950'>JOY!</span></h2>
                <p className='my-4 max-w-[33rem]'>Welcome to Sweet Treats Online! Discover delicious cakes and cookies, freshly baked and delivered to your door. Perfect for any occasion. Order now for the finest ingredients and delightful flavors!</p>
                <div className='inline-flex items-center justify-center gap-4 p-2 bg-first rounded-xl'>
                    <div className='text-center regular-14 leading-tight pl-5'>
                        <h5 className='font-bold'>40% off</h5>
                        <p className='regular-14'>On All Items</p>
                    </div>
                    <Link to={''} className='btn-dark rounded-xl flexCenter !py-4'>Order now</Link>
                </div>
                <div className='mt-4 '>
                    <RelatedProducts/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FirstMain