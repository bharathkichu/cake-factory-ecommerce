import React, { useState } from "react";
import upload_area from "../assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "ourcakes",
    new_price: "",
    old_price: "",
  });

  const BACKEND_URL = "https://cake-factory-backend.onrender.com"; // Render backend URL

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const Add_Product = async () => {
    if (!productDetails.name || !productDetails.old_price || !productDetails.new_price || !image) {
      alert("Please fill all fields and upload an image.");
      return;
    }

    let responseData;
    let product = { ...productDetails };

    let formData = new FormData();
    formData.append("image", image);

    try {
      // Upload Image to Render Backend
      const uploadResponse = await fetch(`${BACKEND_URL}/upload`, {
        method: "POST",
        body: formData,
      });

      responseData = await uploadResponse.json();

      if (responseData.success) {
        // Set image URL to state
        product.image = responseData.image_url;
        setProductDetails((prev) => ({ ...prev, image: responseData.image_url }));

        // Add Product to Render Backend
        const addProductResponse = await fetch(`${BACKEND_URL}/api/products/addproduct`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });

        const addProductData = await addProductResponse.json();

        if (addProductData.success) {
          alert("Product Added Successfully!");
          // Reset Form
          setProductDetails({
            name: "",
            image: "",
            category: "ourcakes",
            new_price: "",
            old_price: "",
          });
          setImage(null);
        } else {
          alert("Failed to add product.");
        }
      } else {
        alert("Image upload failed.");
      }
    } catch (error) {
      console.error("Error uploading product:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="p-8 box-border bg-primary w-full">
      {/* Product Name */}
      <div className="mb-3">
        <h4 className="bold-18 pb-2">Product Title:</h4>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Enter product name..."
          className="bg-first outline-none max-w-80 w-full py-2 px-4 rounded-md"
        />
      </div>

      {/* Old Price */}
      <div className="mb-3">
        <h4 className="bold-18 pb-2">Original Price:</h4>
        <input
          value={productDetails.old_price}
          onChange={changeHandler}
          type="number"
          name="old_price"
          placeholder="Enter original price..."
          className="bg-first outline-none max-w-80 w-full py-2 px-4 rounded-md"
        />
      </div>

      {/* Offer Price */}
      <div className="mb-3">
        <h4 className="bold-18 pb-2">Offer Price:</h4>
        <input
          value={productDetails.new_price}
          onChange={changeHandler}
          type="number"
          name="new_price"
          placeholder="Enter offer price..."
          className="bg-first outline-none max-w-80 w-full py-2 px-4 rounded-md"
        />
      </div>

      {/* Category Selection */}
      <div className="mb-3 flex items-center gap-x-4">
        <h4>Product Category:</h4>
        <select
          name="category"
          value={productDetails.category}
          onChange={changeHandler}
          className="bg-container ring-1 ring-amber-950 rounded-sm outline-none"
        >
          <option value="ourcakes">Our Cakes</option>
          <option value="ourcookies">Our Cookies</option>
          <option value="blog">Blog</option>
        </select>
      </div>

      {/* Image Upload */}
      <div>
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            alt="Upload preview"
            className="w-20 rounded-sm inline-block"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
          className="bg-container max-w-80 w-full py-3 px-4"
        />
      </div>

      {/* Submit Button */}
      <button onClick={Add_Product} className="btn-dark rounded-lg mt-4 flexCenter gap-x-2">
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
