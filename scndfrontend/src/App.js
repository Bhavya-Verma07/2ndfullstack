import React from "react";
import "./App.css";
import Navbar from "./Components/navbar";
// import Center from "./Components/center";
import Footer from "./Components/footer";
// import Form from "./Components/form";
// import List from "./Components/list";
// import Form1 from "./Components/form1";
import Header from "./Components/header";
// import Card from "./Components/card";
import BasicTabs from "./Components/tabss";

function App() {
  return (
    <div>
      <Header/>
      <Navbar />
      <BasicTabs/>
      {/* <Center /> */}
      {/* <Card/> */}
      {/* <List /> */}
      {/* <Form /> */}
      {/* <Form1/> */}
      <br/>
      <br/>
      <Footer />
    </div>
  );
};

export default App;
