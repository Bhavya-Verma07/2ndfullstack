const mongoose = require("mongoose");

const contentschema= mongoose.Schema({
category:String,
example: String,
description:String,
type: String
},
{timestamps:true});

const contentmodel = mongoose.model("content",contentschema);
module.exports= contentmodel;