import React from 'react';
import { Link } from 'react-router-dom';
import { VscSettings } from "react-icons/vsc";
// import all_products from '../assets/all_products';
import Item from '../components/Item';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';


const Category = ({ category })=> {

  const {all_products} = useContext (ShopContext);

  return (
    <section className='max-padd-container bg-primary'>
      <div>
        <div className='flexBetween my-10 mt-0 '>
          <h5><span className='font-bold'>Showing 1-10</span></h5>
          <Link to={'/'}><VscSettings  className=' text-3xl bg-container rounded-md h-10 w-10 p-2 text-white mt-5' /></Link>
        </div>
        <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-10 '>
          {all_products.map((item)=>{
            if (category === item.category) {
              return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            }
          })}
        </div>
        <div className='py-5 text-center'>
          <button className='btn-dark rounded-xl'>Load more</button>
        </div>
      </div>
    </section>
  );
}

export default Category;