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
status:{
    type:String
},
paidammount:{
    type: String,
},
dues:{
    type:String,
}
},
{timestamps:true});

const studmodel=mongoose.model("student",studschema);
module.exports= studmodel;