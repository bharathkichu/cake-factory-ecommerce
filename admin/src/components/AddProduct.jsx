import React, { useState } from 'react';
import upload_area from '../assets/upload_area.svg';

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "ourcakes",
    new_price: "",
    old_price: "",
  });

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const Add_Product = async () => {
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('image', image); 

    try {
      const uploadResponse = await fetch(`http://localhost:7777/upload`, {
        method: 'POST',
        body: formData,
      });

      responseData = await uploadResponse.json();

      if (responseData.success) {
        product.image = responseData.image_url; 

        const addProductResponse = await fetch(`http://localhost:7777/api/products/addproduct`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(product),
        });

        const addProductData = await addProductResponse.json();

        if (addProductData.success) {
          alert("Product Added");
        } else {
          alert("Upload Failed");
        }
      }
    } catch (error) {
      console.error('Error uploading product:', error);
      alert("Something went wrong");
    }
  };

  return (
    <div className='p-8 box-border bg-primary w-full'>
      <div className='mb-3'>
        <h4 className='bold-18 pb-2'>Product title :</h4>
        <input 
          value={productDetails.name} 
          onChange={changeHandler} 
          type='text' 
          name='name' 
          placeholder='Type here...' 
          className='bg-first outline-none max-w-80 w-full py-2 px-4 rounded-md' 
        />
      </div>

      <div className='mb-3'>
        <h4 className='bold-18 pb-2'>Price :</h4>
        <input 
          value={productDetails.old_price} 
          onChange={changeHandler} 
          type='text' 
          name='old_price' 
          placeholder='Type here...' 
          className='bg-first outline-none max-w-80 w-full py-2 px-4 rounded-md' 
        />
      </div>

      <div className='mb-3'>
        <h4 className='bold-18 pb-2'>Offer Price :</h4>
        <input 
          value={productDetails.new_price} 
          onChange={changeHandler} 
          type='text' 
          name='new_price' 
          placeholder='Type here...' 
          className='bg-first outline-none max-w-80 w-full py-2 px-4 rounded-md' 
        />
      </div>

      <div className='mb-3 flex items-center gap-x-4'>
        <h4>Product Category :</h4>
        <select 
          id=''
          name='category' 
          value={productDetails.category} 
          onChange={changeHandler} 
          className='bg-container ring-1 ring-amber-950  rounded-sm outline-none'
        >
          <option value="ourcakes">Our Cakes</option>
          <option value="ourcookies">Our Cookies</option>
          <option value="blog">Blog</option>
        </select>
      </div>

      <div>
        <label htmlFor='file-input'>
          <img src={image ? URL.createObjectURL(image) : upload_area } alt='' className='w-20 rounded-sm inline-block' />
        </label>
        <input 
          onChange={imageHandler} 
          type='file' 
          name='image' 
          id='file-input' 
          hidden 
          className='bg-container max-w-80 w-full py-3 px-4'
        />
      </div>

      <button onClick={Add_Product} className='btn-dark rounded-lg mt-4 flexCenter gap-x-2'>Add Product</button>
    </div>
  );
};

export default AddProduct;
