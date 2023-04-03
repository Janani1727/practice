const jwt =require("jsonwebtoken")

const auth=(req,res,next) => {

const token=req.headers.authorization

    if(token){
        jwt.verify(token,"eval",(err,decoded)=>{
            if(decoded){
                console.log(decoded)
                next()
            }
            else{
                res.send({"msg":"please login"})
            }
        })
    }
    else{
        res.send({"msg":"please login"})
    }
}

module.exports={auth}