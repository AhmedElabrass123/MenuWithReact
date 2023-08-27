import React from "react";
import "./food.css";
const FoodBox = ({ itemData }) => {
  return (
    <>
      <div className="container">
        <div className="boxes">
          {itemData.length ? (
            itemData.map((food) => {
              return (
                <div className="box" key={food.id}>
                  <div className="details">
                    <div className="NamePrice">
                      <span className="price">{food.price}</span>
                      <span className="name">{food.foodName}</span>
                    </div>
                    <div className="desc">{food.desc}</div>
                  </div>
                  <div className="myImg">
                    <img src={food.img} alt="sorry" />
                  </div>
                </div>
              );
            })
          ) : (
            <h1>No Data</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default FoodBox;
