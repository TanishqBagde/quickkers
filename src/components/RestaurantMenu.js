
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import {useState} from "react";


const RestaurantMenu = () => { 


  const {resId} = useParams();

  const resInfo = useRestaurantMenu(resId); // Declared a  custom hook 

if(resInfo === null) return <Shimmer/>;

 const { name, cuisines, costForTwoMessage} =
   resInfo?.cards[2]?.card?.card?.info;
 
 //const {itemCards} =
 //  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
   
 //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
 const categories = 
 resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
   (c) => 
     c.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" 
     );
     console.log(categories);
    return ( 
    //"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        <div className ="menu-card text-center" > 
           
            <h1 className="font-bold my-8 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {/*Categories accordions*/}
            {
              categories.map((category) => (
                 <RestaurantCategory
                 key={category?.card?.card.title} 
                 data={category?.card?.card}/>
            ))}
            
           </div>  
          
    );
};



export default RestaurantMenu;