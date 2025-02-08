import React, { useState, useEffect } from 'react';
import Item from './Item';

const NewArrivals = () => {
  const [new_collection, setNew_collection] = useState([]);
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch new collection data from the backend
    fetch('https://cake-factory-backend.onrender.com/newcollections')
      .then((response) => response.json())
      .then((data) => setNew_collection(data))
      .catch((error) => {
        console.error('Error fetching new collection:', error);
        setError('Failed to load new collection. Please try again later.');
      });
  }, []);

  return (
    <section className='max-padd-container bg-primary p-12 xl:py-28'>
      <div className='text-center max-w-xl mx-auto'>
        <h3 className='text-amber-950'>Our New Products</h3>
      </div>

      {/* Display error message if any */}
      {error && <p className='text-red-600 text-center mt-4'>{error}</p>}

      <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-10 mt-32'>
        {new_collection.length > 0 ? (
          new_collection.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={<span className="text-amber-950 bold-20">{item.name}</span>}
              image={item.image}
              new_price={<span className=" bold-15">{item.new_price}</span>}
              old_price={<span className=" bold-15">{item.old_price}</span>}
            />
          ))
        ) : (
          <p className='text-center text-gray-500'>No new products available at the moment.</p>
        )}
      </div>
    </section>
  );
};

export default NewArrivals;
