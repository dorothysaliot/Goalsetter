const asyncHandler = require('express-async-handler');


//@desc GET goals
//@route GET /api/goals
//@access PRIVATE
const getGoals = asyncHandler( async (req,res) =>{
    res.send({message:'Get goals'})
})

//@desc SET goals
//@route POST /api/goals
//@access PRIVATE
const setGoals = asyncHandler (async (req,res) =>{
    if(!req.body.text){ 
        res.status(400)
        throw new Error('Please add text field')
    }
    res.send({message:'Set goal'})
})

//@desc UPDATE goals
//@route PUT /api/goals/:id
//@access PRIVATE
const updateGoals = asyncHandler(async (req,res) =>{
    res.send({message:`Update goal ${req.params.id}`})
})

//@desc DELETE goals
//@route DELETE /api/goals/:id
//@access PRIVATE
const deleteGoals = asyncHandler(async (req,res) =>{
    res.send({message:`Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}