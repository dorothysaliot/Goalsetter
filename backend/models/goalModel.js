const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    //user associated with the goal
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    text:{
        type:String,
        require:[true,'Please add a goal']
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Goal',goalSchema);