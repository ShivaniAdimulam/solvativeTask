let mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    p5Points:{
        type:Number,
        default:0
    },
    rewardsPoints:{
        type:Number,
        default:0
    }
},{timestamps:true})

const user=mongoose.model("user",userSchema)

module.exports=user;