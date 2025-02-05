import express from 'express';
import Product from '../models/productModel.js';
const router = express.Router();

router.post('/addproduct', async (req, res) => {
  try {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
      let last_product_array = products.slice(-1);
      let last_product = last_product_array[0];
      id = last_product.id + 1;
    } else {
      id = 1;
    }
    const product = new Product({
      id : id,
      name : req.body.name,
      image : req.body.image,
      category : req.body.category,
      new_price : req.body.new_price,
      old_price : req.body.old_price,
    });

    await product.save();
    res.json({
      success: true,
      name: req.body.name,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error saving product', error });
  }
});

// getting all products
router.get('/', async (req,res)=>{
    let products = await Product.find({});
    console.log("All products fetched");
    res.send(products)
});

// Routes for Update a Product
router.put('/', async (req, res) => {
    try {
      const updatedProduct = await Product.findOneAndUpdate({id: req.body.id},req.body,{new: true});
      console.log("Product Updated successfully");
      if (updatedProduct) {
        res.json({ 
            success: true,
            updatedProduct });
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error updating product", error });
    }
  });

// deleting product
router.delete('/', async (req,res)=>{
    await Product.findOneAndDelete({id : req.body.id});
    console.log("Product Deleted successfully");
    res.json({
        success : true,
        name : req.body.name,
    })
});

export default router;