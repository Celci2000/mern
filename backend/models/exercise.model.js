import mongoose from 'mongoose'
const Schema = mongoose.Schema
const exerciseSchema= mongoose.Schema({

    username:{
        type :String, required:true
    },
    description:{
        type :String, required:true
    },
    duratiion :{
        type : String  //required :true

    },
   
},{
    timestamp: true,

})

const Exercise = mongoose.model('Exercise' , exerciseSchema)
export default  Exercise
