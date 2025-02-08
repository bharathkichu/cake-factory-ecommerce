import React, { useEffect, useState } from 'react';
import Item from './Item';

function OurProducts() {

  const [our_products, setOur_products] = useState([]);
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch the products from the backend
    fetch('https://cake-factory-backend.onrender.com/ourproducts')
      .then((response) => response.json())
      .then((data) => setOur_products(data))
      .catch((error) => {
        console.error('Error fetching our products:', error);
        setError('Failed to load products. Please try again later.');
      });
  }, []);

  return (
    <section className='max-padd-container bg-primary p-12 xl:py-28'>
      <div className='text-center max-w-xl mx-auto'>
        <h3 className='text-amber-950'>Our Products</h3>
        <p>
          Get new varieties of Birthday Cake, Wedding Cake, Pastries, Brownies, Traditional Snacks and Healthy Bread at Bread Factory, the best bakery and cake shop in Trivandrum. Among all the best cake shops in Trivandrum, Bread Factory regularly introduces new cakes. So, if you are looking for the best birthday cake shops in Trivandrum, Bread Factory will be a perfect choice. The cakes, pastries and brownies at Bread Factory, Trivandrum, are new and the best in the city. Also, the outlets are known for serving delicious traditional snacks and healthy bread in Trivandrum.
        </p>
      </div>

      {/* Display error message if any */}
      {error && <p className='text-red-600 text-center mt-4'>{error}</p>}

      <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-10 mt-32'>
        {our_products.length > 0 ? (
          our_products.map((item) => (
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
          <p className='text-center text-gray-500'>No products available at the moment.</p>
        )}
      </div>
    </section>
  );
}

export default OurProducts;
