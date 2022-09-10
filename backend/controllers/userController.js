//@desc REGISTER new users
//@route POST /api/users
//@access PUBLIC
const registerUser  = (req,res) =>{
    res.send({message:'Register User'});
}

//@desc AUTHENTICATE users
//@route POST /api/users/login
//@access PUBLIC
const loginUser  = (req,res) =>{
    res.send({message:'Login User'});
}

//@desc GET user data
//@route GET /api/users/me
//@access PUBLIC
const getMe  = (req,res) =>{
    res.send({message:'User data display'});
}



module.exports = {
    registerUser,
    loginUser,
    getMe
};