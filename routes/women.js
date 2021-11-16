const router = require("express").Router();
const Womens = require("../models/Womens");


//create records
router.post("/womens", async(req,res)=>{
    try{
        const addingRecords = new Womens(req.body);
        const insertRecords = await addingRecords.save();
        res.status(201).json(insertRecords);
        
    }catch(error){
        res.status(500).json({message:error, statusCode:"500"})
    }
})

//get all records
router.get("/womens", async(req,res)=>{
    try{
        const getWomens = await Womens.find({}).sort({"ranking":1});
        res.status(200).json(getWomens);
        
    }catch(error){
        res.status(500).json({message:error, statusCode:"500"})
    }
})

//get records by id
router.get("/womens/:id", async(req,res)=>{
    try{
        const getWomen = await Womens.findById({_id: req.params.id});
        res.status(200).json(getWomen);
        
    }catch(error){
        res.status(500).json({message:error, statusCode:"500"})
    }
})
//update
router.patch("/womens/:id", async(req,res)=>{
    try{
        const updateData = await Womens.findByIdAndUpdate(_id,req.body,{new:true});
        res.status(200).json(updateData);
        
    }catch(error){
        res.status(500).json({message:error, statusCode:"500"})
    }
})

router.delete("/womens/:id", async(req,res)=>{
    try{
        const deleteRecords = await Womens.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteRecords);
        
    }catch(error){
        res.status(500).json({message:error, statusCode:"500"})
    }
})


module.exports = router;
