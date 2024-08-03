const {userModel}=require('../models/userModel')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const validator=require('validator')


//login user
const loginUser=async(req, res)=> {
    const {email,password}=req.body;
    try {
        const user =await userModel.findOne({email})
        if(!user){
            res.json({success: false,message:"user does not exists"})
        }

        const isMatched = await bcrypt.compare(password,user.password)

        if(!isMatched){
            return res.json({success:false,message:"Invalid credentials"})
        }

        const token=createToken(user._id)
        res.json({success:true,token})
    } catch (error) {
        console.log(error)
        res.json({success:false,mrssage:"error"})
    }
}

const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

//register user
const registerUser=async(req,res)=>{
    const {name,password,email}=req.body;
    try {
        const exists=await userModel.findOne({email})
        //check if user already exists     
        if(exists){
            return res.json({success:false,message:"user already exists"})
        }
        // check email format and strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"enter valid email"})
        }
        //check password 
        if(password.length<8){
            return res.json({success:false,message:"Please enter a strong password"})
        }

        //hashing user password
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)

        const newUser=new userModel({
            name,
            email,
            password:hashedPassword
        })
        const user = await newUser.save()
        const token=createToken(user._id)
        res.json({success:true,token})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }

}

module.exports={loginUser,registerUser}