const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
    res.send({message:'Get goals'})
})

router.post('/', (req,res) =>{
    res.send({message:'Set goal'})
})

router.put('/:id', (req,res) =>{
    res.send({message:`Update goal ${req.params.id}`})
})

router.delete('/:id', (req,res) =>{
    res.send({message:`Delete goal ${req.params.id}`})
})

module.exports = router;