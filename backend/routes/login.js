
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const userModel = require("../models/registerSchema");
const jwt = require("jsonwebtoken");

const secret = "SurveyForm";
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/user/login", async(req, res)=>{
    // console.log('api fetched')
    try{
        const {email, password} = req.body;
        const user_data = await userModel.findOne({email:email})
        if(!user_data){
            console.log("I came to first if block statement")
            return res.status(401).send({
                status:"Failed",
                message:"Invalid Email"
            })
        }
        else{
            bcrypt.compare(password, user_data.password, (err, result)=>{
                if(!result){
                   return res.status(403).json({
                        status:"Failed",
                        message:"Invalid Password"
                    })   
                }
                else{
                    const token=jwt.sign({
                        exp: Math.floor(Date.now() / 1000) + (60 * 60* 60 *60),
                        user_data: user_data._id
                      }, secret);
                      
                    const userdetails = {...user_data._doc, password: undefined}
                    return res.status(200).json({
                        status:"Success",
                        message: {token, userdetails}
                    })
                }
            })
        }
        
    }catch(e){
        console.log(e)
    }


})
module.exports = router;



// const router = require("express").Router();
// const { User } = require('../models/registerSchema')
// const bcrypt = require("bcrypt");
// const Joi = require("joi");
 

// router.post('user/login',  async (req,res)=>{
//     console.log("yes i am here")
//     try{
//         const { error } = validate(req.body);
// 		if (error){
//             return res.status(400).send({ message: error.details[0].message });
//         }
//         const data = await User.findOne({ email:req.body.email });
//         if(!data){
//             return res.status(401).send({ message: "Invalid Email or Password" });
//         }

//         const validpassword = await bcrypt.compare(req.body.password, user.password);

//         if(!validpassword){
//             return res.status(401).send({ message:"Invalid email or password"} );
//         }

//         const token = data.generateAuthToken();
//         res.status(200).send({data:token, message:"Loggid in successfully"})

//     }catch(error){
//         res.status(500).send({ message:"internal server error" });
//     }
// });

// const validate = (data) =>{
//     const schema = Joi.object({
//         email:Joi.string().email().required().label("email"),
//         password:Joi.string().required().label('password')
//     })
//     return schema.validate(data)
// }


// module.exports = router;
