const express=require("express")
// const jwt=require("jsonwebtoken")
const {MediumModel} =require("../model/medium.model")

const mediumRouter =express.Router()

mediumRouter.get("/",async(req,res)=>{

    const medium=await MediumModel.find()
    res.send(medium)
})
mediumRouter.post("/create",async(req,res)=>{
    const payload=req.body
    // console.log(payload)
    const post =new MediumModel(payload)
    await post.save()
    res.send({"msg":"posts created"})

})

mediumRouter.patch("/update/:id", async(req,res)=>{
    const payload = req.body
    const id = req.params.id
   
   
    try{

   await MediumModel.findByIdAndUpdate({"_id":id},payload)
           res.send("medium Updated ")
   
    
    }catch(err){
       console.log(err)
       res.send({"msg":"Something went wrong","err":err.message})
    }
    
   })

   mediumRouter.delete("/delete/:id", async(req,res)=>{
    
    const id = req.params.id
   
    
    try{
    
           await MediumModel.findByIdAndDelete({"_id":id})
           res.send(" medium deleted ")

    }catch(err){
       console.log(err)
       res.send({"msg":"Something went wrong"})
    }
    
   })


module.exports={mediumRouter}
