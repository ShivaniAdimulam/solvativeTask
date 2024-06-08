let mongoose=require('mongoose')
const pointSchema=new mongoose.Schema({
    points:{
        type:Number,
        required:true
    },
    givenBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    givenTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

const point=mongoose.model("point",pointSchema)

module.exports=point;