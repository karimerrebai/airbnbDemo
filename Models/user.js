const mongoose =require('mongoose')
const schemaUser =new mongoose.Schema(
    {
        fullname:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String ,
            required:true
        },
        phone:{
            type:Number,
            required:true
        },
        verified:{
            type:Boolean,
            default:false
        },
        verificationCode:{
            type:String,
            required:false
        },
        verificationPassword:{
            type:String,
            required:false
        }
    },{timestamps:true}
)
module.exports=mongoose.model('User',schemaUser)