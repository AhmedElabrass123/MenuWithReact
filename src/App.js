import React, { useState } from "react";
import NavBar from "./components/NavBar";
import MyButton from "./components/MyButton";
import FoodBox from "./components/FoodBox";
import FoodData from "./components/FoodData";
const App = () => {
  const [itemData, setItemsData] = useState(FoodData);
  const FilterByCategory = (BtnName) => {
    if (BtnName === "all") {
      setItemsData(FoodData);
    } else {
      const newArr = FoodData.filter((x) => x.foodName === BtnName);
      setItemsData(newArr);
    }
  };
  const SearchByCategory = (theSearch) => {
    console.log("ok");
    if (theSearch === "all") {
      setItemsData(FoodData);
    } else {
      const searchItems = itemData.filter((item) =>
        item.foodName.includes(theSearch)
      );
      setItemsData(searchItems);
    }
  };
  return (
    <div>
      <NavBar searchFunc={SearchByCategory} />
      <MyButton BtnName={FilterByCategory} />
      <FoodBox itemData={itemData} />
    </div>
  );
};

export default App;
