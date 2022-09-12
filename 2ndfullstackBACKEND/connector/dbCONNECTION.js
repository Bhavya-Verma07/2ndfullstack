const mongoose = require("mongoose");
//code for connecting database with server(time taking)
const databaseCONNECTION = async ()=> {
    try {
        await mongoose.connect("mongodb://localhost:27017/myfirstdatabase");
        console.log("Database is sucessfully connected...");
    } catch (error) {
      console.log(error);
    }
};
//exporting databaseCONNECTION
module.exports = databaseCONNECTION;


// const mongoose = require("mongoose");

// const databaseconnection = async () => {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/myfirstdatabase");
//     console.log("database is successfully connected");
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports = databaseconnection;