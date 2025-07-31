import { useState } from "react";
import Item from "./Item";

const FoodItems = ({item}) => {
  let [activeItems , setActiveItems] = useState([]);

  let onBuyButton = ( items, event) => {
    let newItems = [...activeItems,items];
    setActiveItems(newItems);
  }

   return (
    <ol className="list-group list-group-numbered kg-number">
  {item.map((items)=>(
    <Item
     key={items}
     foodItem={items} 
     bought = {activeItems.includes(items)}
    handleBuyButton = {(event) =>onBuyButton(items,event)}
    ></Item>
  ))}
</ol>
   );

};
export default FoodItems;