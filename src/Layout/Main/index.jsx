import React from "react";
import "./index.css";
import TopMain from "../../Components/TopMain";
import List from "../../Components/List";

function Main() {
      
  return (
    <div className="main__container">
      <div>
        <TopMain/>
        <List/>
      </div>
    </div>
  );
}

export default Main;
