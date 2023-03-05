
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name : {type: String, required: true},
    email: {type:String, unique: true, required: true},
    phone: {type: Number,required: true},
    profession: {type: String, required: true},
    password: {type: String, required: true},

}, {timestamps:true}) 
const users = mongoose.model("user", userSchema);
module.exports= users;































// const mongoose = require("mongoose");
// const jwt = require('jsonwebtoken');
// const Joi = require('joi');
// const passwordComplexity = require('joi-password-complexity')
// const userSchema = new mongoose.Schema({
//     name : {type: String, required: true},
//     email: {type:String, unique: true, required: true},
//     phone: {type: Number,required: true},
//     profession: {type: String, required: true},
//     password: {type: String, required: true},
// }) 






// userSchema.methods.generateAuthToken = function(){
//  const token = jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY,{expiresIn: '7d'})
//  return token
// }

// const User = mongoose.model("user", userSchema);

// const validate = (data) =>{
//     const schema = Joi.object({
//         name: Joi.string().required().label("name"),
//         email: Joi.string().email().required().label("email"),
//         phone: Joi.number().required().label("phone"),
//         profession: Joi.string().required().label("profession"),
//         password: passwordComplexity().required().label("password")
//     })
//     return schema.validate(data);
// }


// module.exports = {User,validate}