const router = require("express").Router();
const CryptoJS = require("crypto-js");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
//Registering Users
router.post("/register", async(req,res)=>{
    const newUser = new User({
        username :req.body.username,
        email :req.body.email,
        password :CryptoJS.AES.encrypt(req.body.password,process.env.ENCRYPTED_KEY).toString()
    });
    try{
    const savedUser =  await newUser.save()
    res.status(201).json(savedUser)
    }
    catch(err){
        res.status(500).json(err);
    }
});

//Login Users

router.post("/login", async(req, res)=>{
    //Tries to find the username in the database.
    try{
            const user = await User.findOne({
                username:req.body.username
            });
            !user && res.status.toString(401).json("Wrong Credentials. ")
            const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.ENCRYPTED_KEY).toString(CryptoJS.enc.Utf8);
             hashedPassword!== req.body.password && 
             res.status(401).json("Wrong Password!");
             
             const accessToken = jwt.sign({
                 id:user.id,
                 isAdmin:user.isAdmin
             }, process.env.ENCRYPTED_KEY, {expiresIn:"1d"})

             const {password, ...others }= user._doc;
             res.status(200).json({...others, accessToken});
             
            
    }
    catch(err){
        res.status(500).json(err);
    }


})
module.exports=router;