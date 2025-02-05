import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import multer from 'multer';
import cors from 'cors';
import path from 'path'; 
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import Product from './models/productModel.js';
import User from './models/userModel.js';
import jwt from 'jsonwebtoken';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.get("/", (req, res) => {
    res.send("Express app is running");
});

// our new products
app.get('/newcollections', async (req,res)=>{
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log("New collection fetched");
    res.send(newcollection);
});

// our products
app.get('/ourproducts', async (req,res)=>{
    let products = await Product.find({ category : 'ourcakes' });
    let ourproducts = products.slice(0, 4);
    console.log("Ourproducts fetched");
    res.send(ourproducts);
});

const fetchUser = async (req, res, next)=> {
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({errors : "Please authentication using valid login"});
    } else {
        try {
            const data = jwt.verify(token, "secret_factory");
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({errors : "Please authentication using valid token"})
        }
    }
};


// addtocart
app.post('/addtocart', fetchUser, async (req,res)=> {
    console.log("add cart", req.body.itemId);
    let userData = await User.findOne({ _id : req.user.id });
    userData.cartData[req.body.itemId] += 1;
    await User.findOneAndUpdate({ _id:req.user.id},{cartData:userData.cartData});
    res.send ("Added");
});

// app.post('/addtocart', fetchUser, async (req, res) => {
//     const { itemId } = req.body;

//     try {
//         let userData = await User.findOne({ _id: req.user.id });

//         if (!userData.cartData[itemId]) {
//             userData.cartData[itemId] = 1;
//         } else {
//             userData.cartData[itemId] += 1;
//         }

//         await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
//         res.send("Item added to cart");
//     } catch (error) {
//         console.error("Error adding to cart:", error);
//         res.status(500).send("Error adding to cart");
//     }
// });


// remove cart
app.post('/removefromcart', fetchUser, async (req,res)=> {
    console.log("removed", req.body.itemId);
    let userData = await User.findOne({ _id : req.user.id });
    if(userData.cartData[req.body.itemId] > 0)
    userData.cartData[req.body.itemId] -= 1;
    await User.findOneAndUpdate({ _id:req.user.id},{cartData:userData.cartData});
    res.send ("Added");
});

// get cart
app.post('/getcart', fetchUser, async (req,res)=> {
    console.log("get cart");
    let userData = await User.findOne({ _id : req.user.id });
    res.json(userData.cartData);
});
  

// Multer image storage configuration
const storage = multer.diskStorage({
    destination: './upload/images/',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

app.use('/images', express.static('upload/images'));
app.post("/upload", upload.single('image'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${PORT}/images/${req.file.filename}`
    });
});


// MongoDB connection
mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`App is listening on port: ${PORT}`);
        });
    }).catch((error) => {
        console.log("Database connection error:", error);
    });
