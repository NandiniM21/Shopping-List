import FoodHeading from "./components/FoodHeading";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";


function App() {  
    let [foodItems, setFoodItems] = useState([]);

    const onKeyDown = (event) => {
      if(event.key === "Enter") {
        let newFoodItem = event.target.value;
        event.target.value = "";
        let newItems = [...foodItems,newFoodItem];
        setFoodItems(newItems);
      }
 
  };
 
  return (
  <>
     < Container>
  <FoodHeading></FoodHeading>
  <FoodInput handleKeyDown ={onKeyDown}></FoodInput>
  <ErrorMessage item={foodItems}></ErrorMessage> 
  <FoodItems item={foodItems}></FoodItems>
</Container> 
</>
  );
}

export default App;
