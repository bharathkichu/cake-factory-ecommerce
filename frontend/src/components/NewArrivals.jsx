import React, { useState, useEffect } from 'react'
// import LATEST from '../assets/latest'
import Item from './Item'

const NewArrivals = ()=> {

  const [new_collection, setNew_collection] = useState([])
  useEffect(()=>{
    fetch('http://localhost:7777/newcollections').then((response)=> response.json()).then((data)=> setNew_collection(data));
  }, [])

  return (
    <section className='max-padd-container bg-primary p-12 xl:py-28'>
      <div className='text-center max-w-xl mx-auto'>
        <h3 className='text-amber-950'>Our New Products</h3>
      </div>        
      <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-10 mt-32'>
        {new_collection.map((item)=>(
          <Item key={item.id} id={item.id} name={<span className="text-amber-950 bold-20">{item.name}</span>} image={item.image} new_price={<span className=" bold-15">{item.new_price}</span>} old_price={<span className=" bold-15">{item.old_price}</span>}/>
        ))}
      </div>
    </section>
  )
}

export default NewArrivals;