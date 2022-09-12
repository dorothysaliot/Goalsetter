const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async(req,res,next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        //get the token from the header
        try{
            token = req.headers.authorization.split(' ')[1]
            //verify token
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            //get user from the token and store it is req.user
            req.user = await User.findById(decoded.id).select('-password')
            next()
        }catch(error){
            console.log(error)
            res.status(401)
            throw new Error('Not Authorized')
        }if(!token){
            res.status(401)
            throw new Error('not authorized, no token')
        }
    }
})

module.exports = {protect};