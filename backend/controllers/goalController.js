const asyncHandler = require('express-async-handler');

//model here
const Goal = require('../models/goalModel');

//@desc GET goals
//@route GET /api/goals
//@access PRIVATE
const getGoals = asyncHandler( async (req,res) =>{
    const goals = await Goal.find();
    res.send(goals)
})

//@desc SET goals
//@route POST /api/goals
//@access PRIVATE
const setGoals = asyncHandler (async (req,res) =>{
    if(!req.body.text){ 
        res.status(400)
        throw new Error('Please add text field')
    }
    const goal = await Goal.create({
        text:req.body.text
    })
    res.send(goal)
})

//@desc UPDATE goals
//@route PUT /api/goals/:id
//@access PRIVATE
const updateGoals = asyncHandler(async (req,res) =>{
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new:true})

    res.send(updatedGoal)
})

//@desc DELETE goals
//@route DELETE /api/goals/:id
//@access PRIVATE
const deleteGoals = asyncHandler(async (req,res) =>{
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    await goal.remove()
    res.send({id:req.params.id})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}