const express = require("express");
const databaseCONNECTION = require("./connector/dbCONNECTION");
const app = express();
// const STUDENT_MODEL = require("./model/Students");
const CONTENT_MODEL = require("./model/content");
const FORM_MODEL = require("./model/formdetails");
app.use(express.json());

//posting thoughts
app.post("/api/savequotes", async (req, res) => {
  try {
    const { category, example, description, type } = req.body;
    const newContent = new CONTENT_MODEL({
      category,
      example,
      description,
      type,
    });
    await newContent.save();
    return res.json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false });
  }
});

//getting thoughts
app.get("/api/gettingquotes", async (req, res) => {
  try {
    const quotesdata = await CONTENT_MODEL.find().sort({ createdAt: -1 });
    return res.json({ data: quotesdata, success: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
});


// //D-deleting thoughts
app.delete("/api/deletequote", async (req, res) => {
  try {
    const deletedquote= await CONTENT_MODEL.findOneAndDelete({});
  } catch (error) {
    res.status(400).json({ success: false });
  }
});

//posting form details
app.post("/api/saveinfo", async (req, res) => {
  try {
    const { owner, petname, mobNo, email, address, haddress, sign, lastseen } =
      req.body;
    const newDetails = new FORM_MODEL({
      owner,
      petname,
      mobNo,
      email,
      address,
      haddress,
      sign,
      lastseen,
    });
    await newDetails.save();
    return res.json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false });
  }
});

//getting form info
app.get("/api/gettingDetail", async (req, res) => {
  try {
    const detaildata = await FORM_MODEL.find().sort({ createdAt: -1 });
    return res.json({ data: detaildata, success: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
});

// //C-creating Student model and sending data from frontend
// app.post("/student", async (req, res) => {
//   try {
//     const { name, division, section, branch } = req.body;
//     const newStudent = new STUDENT_MODEL({
//       name,
//       division,
//       section,
//       branch,
//     });
//     await newStudent.save();
//     res.json({ success: true, data: "Students module created." });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ success: false, error: error.message });
//   }
// });

// //R-reading by getting data from database
// app.get("/enrolledstud", async (req, res) => {
//   try {
//     console.log("fetching data from databse");
//     const studdata = await STUDENT_MODEL.find().sort({ createdAt: -1 });
//     res.json({ success: true, studdata });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ success: false, error: error.message });
//   }
// });

// //U-updating data
// app.put("/updatedStud/:name/:division", async (req, res) => {
//   try {
//     const studentupdate = await STUDENT_MODEL.findOneAndUpdate(
//       { name: req.params.name },
//       { division: req.params.division }
//     );
//     res.json({ success: true, studentupdate});
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ success: false, error: error.message });
//   }
// });

// //D-deleting data
// app.delete("/deleteStud/:branch", async (req, res) => {
//   try {
//     const deletedStud = await STUDENT_MODEL.findOneAndDelete({
//       branch: req.params.branch,
//     });
//   } catch (error) {
//     res.status(400).json({ success: false });
//   }
// });

databaseCONNECTION();
// creating server
let port = 8000;
app.listen(port, () => console.log(`SERVER IS RUNNING AT ${port}`));
