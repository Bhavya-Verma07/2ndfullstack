import React from "react";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import ShareIcon from "@mui/icons-material/Share";
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

const Card1 = ({ category, example, description, current }) =>
{
  const colours = [
    "#7FFFD4",
    "#737CA1",
    "#A1727B",
    "#A19872",
    "#A0522D",
    "lavender",
    "yellow",
    "#FFDAB9"
  ];
  const handlesubmit= async ()=> {
    try {
      const response =await axios.delete("/api/deletequote",{
        category,
        example,
        description,
      });
      if(response.data.success){
        alert("Content Deleted Successfully.");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong..")
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="'col-md-4 col-10 col-xxl-4 mx-auto">
            <div
              className="card"
              style={{ width: "18rem", backgroundColor: colours[current % 6] }}
            >
              <div className="card-body">
                <h5 className="card-title">{category}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{example}</h6>
                <p className="card-text">{description}</p>
                <a href="/" className="card-link">
                  <InsertLinkIcon />
                </a>
                <a href="/" className="card-link">
                  <ShareIcon />
                </a>
                <button
          onClick={() => handlesubmit()}
          type="button"
          class="btn mt-2 btn-primary"
          style={{fontSize:"2px"}}
        >
        <DeleteIcon/>
        </button>
                </div>
                </div>
              </div>
            </div>
      </div>
    </>
  );
};
export default Card1;
