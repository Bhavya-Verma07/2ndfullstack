import React,{useState, useEffect} from "react";
import axios from "axios";
import Card1 from "./card1";
const AnimalNews = () => {
  const [newss, setnewss] = useState([]);

  const getnewss = async () => {
    const response = await axios.get("/api/gettingnewss");
    if (response.data.success) {
      setnewss(response.data.data);
    }
  };

  useEffect(() => {
    getnewss();
  }, []); //api/gettingnews


  return (
    <>
    <h2 class="myfont">Latest Updates</h2>
      {newss.map((candidate, i) => {
        return (
          <>
            <Card1
              category={candidate.category}
              example={candidate.example}
              description={candidate.description}
              current={i}
            />
          </>
        )
      })}
    </>
  );
};

export default AnimalNews;