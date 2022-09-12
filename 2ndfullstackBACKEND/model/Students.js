const mongoose =require("mongoose");
const studschema = new mongoose.Schema(
    {
name:{
    type: String,
    required: true,
},
division:{
type: Number,
required:true,
},
section:{
    type: String,
},
branch:{
    type:String
},
},
{timestamps:true});

const studmodel=mongoose.model("student",studschema);
module.exports= studmodel;