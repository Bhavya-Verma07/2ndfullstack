import React, { useState } from "react";
import axios from "axios";

const Form2 = () => {
  const [type, settype] = useState("");
  const [category, setcategory] = useState("");
  const [example, setexample] = useState("");
  const [description, setdescription] = useState("");

  // to store what is written in input boxes we use two attributes
  //1. value={state}
  //2. onChange=(e)=>setstate(e.target.value)}

  const handlesubmit = async () => {
    try {
      const response = await axios.post("/api/savequotes", {
        type,
        category,
        example,
        description,
      });

      if (response.data.success) {
        alert("Content successfully saved");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong..");
    }
  };

  return (
    <>
    <h2 className="myfont">Place your thoughts here</h2>
      <form>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Content type</label>
          <select
            value={type}
            onChange={(e) => settype(e.target.value)}
            class="form-control"
            id="exampleFormControlSelect1"
          >
            <option value=""> Select Content type </option>
            <option value="news"> News </option>
            <option value="quotes">Thoughts</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            value={category}
            onChange={(e) => setcategory(e.target.value)}
            type="email"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Quote</label>
          <textarea
            value={example}
            onChange={(e) => setexample(e.target.value)}
            type="text"
            class="form-control"
            placeholder="Quote here"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Your thoughts </label>
          <textarea
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            type="text"
            class="form-control"
            placeholder="Enter description"
          />
        </div>

        <button
          onClick={() => handlesubmit()}
          type="button"
          class="btn mt-2 btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Form2;