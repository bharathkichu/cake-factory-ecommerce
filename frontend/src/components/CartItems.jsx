import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { FaTrashCan } from "react-icons/fa6";

const CartItems = () => {
    const { all_products, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
  return (
    <section className='max-padd-container bg-primary'>
        <div className='py-5'>
            <table className='w-full mx-auto'>
                <thead>
                    <tr className='border border-amber-950 bg-container regular-16 sm:regular-18 text-start py-10'>
                        <th className='p-1 py-2'>Products</th>
                        <th className='p-1 py-2'>Title</th>
                        <th className='p-1 py-2'>Price</th>
                        <th className='p-1 py-2'>Quantity</th>
                        <th className='p-1 py-2'>Total</th>
                        <th className='p-1 py-2'>Remove</th>
                    </tr>
                </thead>
                <tbody className='border border-amber-950'>
                    {all_products.map((e)=>{
                        if (cartItems[e.id]>0) {
                            return <tr key={e.id} className='border-b border-amber-950 text-amber-950 p-6 text-center'>
                                <td className='flex items-end justify-center'>
                                    <img src={e.image} alt='productImage' height={50} width={50} className='rounded-lg ring-1 ring-amber-950 m-3 '/>
                                </td>
                                <td><div className='line-clamp-2'>{e.name}</div></td>
                                <td>₹{e.new_price}</td>
                                <td className='w-16 h-16 bg-first'>{cartItems[e.id]}</td>
                                <td>₹{e.new_price* cartItems[e.id]}</td>
                                <td><div className='bold-22 relative left-1/3 cursor-pointer'><FaTrashCan onClick={()=> removeFromCart(e.id)} /></div></td>
                            </tr>
                        }
                        return null;
                    })}
                </tbody>
            </table>
            <div className='flex flex-col justify-between gap-y-16 mt-8  rounded-md w-full mx-auto'>
                <div className='flex flex-col gap-3'>
                    <h4 className='bold-20'>Summary</h4>
                    <div>
                        <div className='flexBetween py-3'>
                            <h4>Subtotal : </h4>
                            <h4 className='text-gray-50 font-semibold'>₹{getTotalCartAmount()}</h4>
                        </div>
                        <hr/>
                        <div className='flexBetween py-3'>
                            <h4>Shipping Fee : </h4>
                            <h4 className='text-gray-50 font-semibold'>Free</h4>
                        </div>
                        <hr/>
                        <div className='flexBetween py-3'>
                            <h4>Total : </h4>
                            <h4 className='bold-18'>₹{getTotalCartAmount()}</h4>
                        </div>
                    </div>
                    <button className='btn-dark w-44 rounded-xl'>Checkout</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CartItems;