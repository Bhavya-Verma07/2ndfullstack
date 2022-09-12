const mongoose = require("mongoose");

const formsschema= mongoose.Schema({
    owner:String,
    petname:String,
    mobNo:String,
    email:String,
    address:String,
    haddress:String,
    sign:String,
    lastseen:String
},
{timestamps:true});

const formsmodel = mongoose.model("forms",formsschema);
module.exports= formsmodel;