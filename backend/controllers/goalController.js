//@desc GET goals
//@route GET /api/goals
//@access PRIVATE
const getGoals = (req,res) =>{
    res.send({message:'Get goals'})
}

//@desc SET goals
//@route POST /api/goals
//@access PRIVATE
const setGoals = (req,res) =>{
    res.send({message:'Set goal'})
}

//@desc UPDATE goals
//@route PUT /api/goals/:id
//@access PRIVATE
const updateGoals = (req,res) =>{
    res.send({message:`Update goal ${req.params.id}`})
}

//@desc DELETE goals
//@route DELETE /api/goals/:id
//@access PRIVATE
const deleteGoals = (req,res) =>{
    res.send({message:`Delete goal ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}