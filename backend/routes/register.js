



const express=require('express');
const userModel = require("../models/registerSchema")
const router = express.Router();
const bcrypt = require("bcrypt");
router.use(express.urlencoded({ extended: true }))
router.use(express.json())
router.post("/user/register", async(req,res)=> {
    
    try{
        const {name, email, phone, profession, password}=req.body;
        const check = await userModel.findOne({email:email});
        if(check) {
            return res.status(409).json({
                status:"Failed",
                message: "Email already exists"
            })
        }
        bcrypt.hash(password,10, async(err, cryptedPassword)=>{
            const result = await userModel.create ({
                name,
                email,
                phone,
                profession,
                password: cryptedPassword
            })
            return res.status(201).json({
                status: "Success",
                message: result
            })

            
        })
    }catch(e){
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
});

module.exports = router;







// const router = require('express').Router();
// const { User, validate } = require('../models/registerSchema')
// const bcrypt = require('bcrypt')



// router.post('user/register', async(req,res)=>{
//     try{
//         const { error } = validate(req.body)
//         if(error){
//             return res.status(400).send({message:error.details[o].message});
//         }
//         const data = await User.findOne({email : req.body.email});
//         if(data){
//             return res.status(409).send({message: "User with given email already exist"})
//         }

//         const salt = await bcrypt.genSalt(Number(process.env.SALT));
//         const hashpassword = await bcrypt.hash(req.body.password, salt);

//         await new User({ ...req.body, password: hashpassword }).save();
//         res.status(201).send({ message: "User created successfully" });
//     }catch(error){
//         res.status(500).send({ message: "Internal Server Error" });
//     }
// })


// module.exports = router;