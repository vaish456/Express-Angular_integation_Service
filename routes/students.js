const express = require('express');


const router = express.Router();
//import model that you want to post
const Stud = require('../models/studentsRepo');

//GET
router.get('/',async(req,res) => {
    try{
        const getStudent = await Stud.find();
        res.json(getStudent);
    }catch(err){
        res.json({message:err});
    }
});

//POST
router.post('/',async(req,res) => {
    //console.log(req.body);
    const postStud = new Stud({
        student_id : req.body.student_id,
        student_name : req.body.student_name,
        school : req.body.school,
        admit_date : req.body.admit_date
    });

    try{
        const saveStudent = await postStud.save();
        res.json(saveStudent);
    }catch(err){
        res.json({message:err});
    }
});

//Delete
router.delete('/:StudID',async(req,res)=>{
    try{
        const deleteByID = await Stud.remove({
            _id:req.params.StudID
        });
        res.json(deleteByID);
    }catch(err){
        res.json({message:err});
    }
});
module.exports = router;

//UPDATE a Student

router.patch('/:StudID',async(req,res) => {
    try{
        const updateStudent = await Stud.updateOne(
            {_id:req.params.StudID},
            {$set : {School: req.body.School}}
        );
        res.json(updateStudent);

    }catch(err){
        res.json(err);
    }
});