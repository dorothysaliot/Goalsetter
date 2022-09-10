const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const { create } = require('../models/userModel');

//@desc REGISTER new users
//@route POST /api/users
//@access PUBLIC
const registerUser  = asyncHandler(async(req,res) =>{
    //check if the fileds are empty
    const {name,email,password} = req.body;
    if(!name||!email||!password){
        res.status(400)
        throw new Error('Please fill all fields')
    }
    //check if the user exist in the db
    const userExist = await User.findOne({email});
    if(userExist){
        res.status(400)
        throw new Error('User already exist');
    }
    //hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    //create user
    const user = await User.create({
        name,
        email,
        password:hashedPassword
    })

    //validate if the user was created
    if(user){
        res.status(200).json({
            _id:user.id,
            name:user.name,
            email:user.email
        })
    }else{
        res.status(400)
        throw new Error('Invalid user');
    }
})

//@desc AUTHENTICATE users
//@route POST /api/users/login
//@access PUBLIC
const loginUser  = asyncHandler(async(req,res) =>{
    res.send({message:'Login User'});
})

//@desc GET user data
//@route GET /api/users/me
//@access PUBLIC
const getMe  = asyncHandler(async(req,res) =>{
    res.send({message:'User data display'});
})



module.exports = {
    registerUser,
    loginUser,
    getMe
};