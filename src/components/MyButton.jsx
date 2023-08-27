import React, { useState } from "react";
import MyBtn from "./MyBtn.css";
import ButtonData from "./ButttonData";
import FoodData from "./FoodData";
const MyButton = ({ BtnName }) => {
  const [click, setClick] = useState("all");
  // const [foods, setFoods] = useState(FoodData);

  return (
    <>
      <div className="head">
        <span>food menu</span>
      </div>
      <div className="myButtons">
        {ButtonData.map((btn) => {
          return (
            <button key={btn.id} onClick={() => BtnName(btn.theName)}>
              {btn.theName}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default MyButton;
