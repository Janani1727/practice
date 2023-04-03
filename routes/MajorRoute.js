const express=require("express")
// const jwt=require("jsonwebtoken")
const {MajorModel} =require("../model/major.model")

const majorRouter =express.Router()

majorRouter.get("/",async(req,res)=>{

            const major=await MajorModel.find()
            res.send(major)
        })
    
   


majorRouter.post("/create",async(req,res)=>{
    const payload=req.body
    // console.log(payload)
    const post =new MajorModel(payload)
    await post.save()
    res.send({"msg":"posts created"})

})

majorRouter.patch("/update/:id", async(req,res)=>{
    const payload = req.body
    const id = req.params.id
   
   
    try{

   await MajorModel.findByIdAndUpdate({"_id":id},payload)
           res.send(" major Updated ")
   
    
    }catch(err){
       console.log(err)
       res.send({"msg":"Something went wrong","err":err.message})
    }
    
   })


   majorRouter.delete("/delete/:id", async(req,res)=>{
    
    const id = req.params.id
   
    
    try{
    
           await MajorModel.findByIdAndDelete({"_id":id})
           res.send(" major deleted ")

    }catch(err){
       console.log(err)
       res.send({"msg":"Something went wrong"})
    }
    
   })


module.exports={majorRouter}
