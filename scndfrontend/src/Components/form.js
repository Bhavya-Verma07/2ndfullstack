//for posting lost and found details



import React,{useState} from "react";
import axios from "axios";

const Form = () => {
  const [owner, setowner] = useState("");
  const [email, setemail] = useState("");
  const [petname, setpetname] = useState("");
  const [mobNo, setmobNo] = useState("");
  const [address, setaddress] = useState("");
  const [haddress, sethaddress] = useState("");
  const [sign, setsign] = useState("");
  const [lastseen, setlastseen] = useState("");
  // const [photo, setphoto] = useState("");
  // to store what is written in input boxes we use two attributes
  //1. value={state}
  //2. onChange=(e)=>setstate(e.target.value)}

  const handlesubmit = async () => {
    try {
      const response = await axios.post("/api/saveinfo", {
        owner,
        petname,
        mobNo,
        email,
        address,
        haddress,
        sign,
        lastseen,
        // photo,
      });

      if (response.data.success) {
        alert("Information successfully saved");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong..");
    }
  };

  <h1 className="myfont">Fill your details here.</h1>;
  return (
    <>
      <form>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Owner Name
          </label>
          <br />
          <input
            className="form-control"
            id="exampleFormControlTextarea1"
            value={owner}
            onChange={(e) => setowner(e.target.value)}
            aria-label="default input example"
            placeholder="Enter your name"
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <br />
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          ></input>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Contact Number
          </label>
          <br />
          <input
            className="form-control"
            id="exampleFormControlTextarea1"
            aria-label="default input example"
            value={mobNo}
            onChange={(e) => setmobNo(e.target.value)}
            placeholder="Enter your phone number"
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Pet Name
          </label>
          <br />
          <input
            className="form-control"
            id="exampleFormControlTextarea1"
            value={petname}
            onChange={(e) => setpetname(e.target.value)}
            aria-label="default input example"
            placeholder="Your pet name here"
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Address
          </label>
          <br />
          <input
            className="form-control"
            id="exampleFormControlTextarea1"
            value={address}
            onChange={(e) => setaddress(e.target.value)}
            aria-label="default input example"
            placeholder="Enter your current address"
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Home Address
          </label>
          <br />
          <input
            className="form-control"
            id="exampleFormControlTextarea1"
            value={haddress}
            onChange={(e) => sethaddress(e.target.value)}
            aria-label="default input example"
            placeholder="Enter your permanent address"
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Place where your pet was last seen
          </label>
          <br />
          <input
            className="form-control"
            id="exampleFormControlTextarea1"
            value={lastseen}
            onChange={(e) => setlastseen(e.target.value)}
            aria-label="default input example"
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Any specific sign you pet has
          </label>
          <br />
          <input
            className="form-control"
            id="exampleFormControlTextarea1"
            value={sign}
            onChange={(e) => setsign(e.target.value)}
            aria-label="default input example"
          ></input>
        </div>
        {/* <label class="form-label" for="customFile">
          Recent photograph of your pet
        </label>
        <input
          type="file"
          className="form-control"
          id="customFile"
        /> */}
        {/* <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          ></input>
          <label className="form-check-label" for="exampleCheck1">
            I agree to terms and conditions.
          </label>
        </div> */}
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handlesubmit()}
        >
          Submit
        </button>
      </form>
    </>
  );
};
export default Form;
