const express=require("express")
// const jwt=require("jsonwebtoken")
const {CriticalModel} =require("../model/critical.model")

const criticalRouter =express.Router()

criticalRouter.get("/",async(req,res)=>{

    const critical=await CriticalModel.find()
    res.send(critical)
})

criticalRouter.post("/create",async(req,res)=>{
    const payload=req.body
    // console.log(payload)
    const post =new CriticalModel(payload)
    await post.save()
    res.send({"msg":"posts created"})

})


criticalRouter.patch("/update/:id", async(req,res)=>{
    const payload = req.body
    const id = req.params.id
   
   
    try{

   await CriticalModel.findByIdAndUpdate({"_id":id},payload)
           res.send(" critical Updated ")
   
    
    }catch(err){
       console.log(err)
       res.send({"msg":"Something went wrong","err":err.message})
    }
    
   })

   criticalRouter.delete("/delete/:id", async(req,res)=>{
    
    const id = req.params.id
   
    
    try{
    
           await CriticalModel.findByIdAndDelete({"_id":id})
           res.send(" critical deleted ")

    }catch(err){
       console.log(err)
       res.send({"msg":"Something went wrong"})
    }
    
})

module.exports={criticalRouter}
