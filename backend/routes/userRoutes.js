import express from 'express';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {        
        let check = await User.findOne({ email: req.body.email });
        if (check) {
            return res.status(400).json({
                success: false,
                error: "Existing user found with same email",
            });
        }

        let cart = {};
        for (let i = 0; i < 300; i++) {
            cart[i] = 0;
        }
        // create user
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            cartData: cart,
        });
        await user.save();

        const data = {
            user: {
                id: user.id,
            },
        };

        const token = jwt.sign(data, process.env.JWT_SECRET || "secret_factory");
        res.json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Server error" });
    }
});

router.post('/login', async (req, res) =>{
    let user = await User.findOne({ email:req.body.email})
    if(user){
        const passMatch = req.body.password === user.password;
        if(passMatch){
            const data = {
                user : {
                    id : user.id,
                },
            };
            const token = jwt.sign(data, "secret_factory");
            res.json({success:true, token});
        }else {
            res.json({success:false, errors: "Wrong Password"});
        }
    }else {
        res.json({success:false, errors: "Wrong Email address"});
    }
});

export default router;