const mongoose =require("mongoose");
const detailschema = new mongoose.Schema(
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
DOB:{
    type:String,
},
mobileno:{
    type: String,
    required:true
},
bloodgroup:
{
    type: String,
}
},
{timestamps:true});

const detaildmodel=mongoose.model("studetail",detailschema);
module.exports= detaildmodel;