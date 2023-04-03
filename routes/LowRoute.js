const express=require("express")
// const jwt=require("jsonwebtoken")
const {LowModel} =require("../model/low.model")

const lowRouter =express.Router()

lowRouter.get("/",async(req,res)=>{

    const low=await LowModel.find()
    res.send(low)
})
lowRouter.post("/create",async(req,res)=>{
    const payload=req.body
    // console.log(payload)
    const post =new LowModel(payload)
    await post.save()
    res.send({"msg":"posts created"})

})

lowRouter.patch("/update/:id", async(req,res)=>{
    const payload = req.body
    const id = req.params.id
   
   
    try{

   await LowModel.findByIdAndUpdate({"_id":id},payload)
           res.send(" low Updated ")
   
    
    }catch(err){
       console.log(err)
       res.send({"msg":"Something went wrong","err":err.message})
    }
    
   })


   lowRouter.delete("/delete/:id", async(req,res)=>{
    
    const id = req.params.id
   
    
    try{
    
           await LowModel.findByIdAndDelete({"_id":id})
           res.send(" low deleted ")

    }catch(err){
       console.log(err)
       res.send({"msg":"Something went wrong"})
    }
    
   })

module.exports={lowRouter}
