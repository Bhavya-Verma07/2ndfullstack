import React,{useState,useEffect} from "react";
import axios from "axios";
import Card1 from "./card1";
const Thoughts = () => {
  const [quotes, setquotes] = useState([]);

  const getquotes = async () => {
    const response = await axios.get("/api/gettingquotes");
    if (response.data.success) {
      setquotes(response.data.data);
    }
  };

  useEffect(() => {
    getquotes();
  }, []);
  return (
    <>
    <h2 class="myfont">What's on your mind?</h2>
      {quotes.map((candidate, i) => {
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

export default Thoughts;
