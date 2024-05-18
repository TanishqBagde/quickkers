import ItemList from "./ItemList";
import { useState } from "react";
import RestaurantMenu from "./RestaurantMenu";

const RestaurantCategory = ({data}) => {
   
    const [ showList , setShowList] = useState(false);

    const handleClick = () => {
      setShowList(!showList);
    };

   

    return (

         <div >
          {/*Header of accordian */}
          <div className ="w-6/12 mx-auto my-8 bg-gray-50 shadow-lg p-4 ">
              <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-yellow-700">{data.title} ({data.itemCards.length})</span>
                <span > ⬇️ </span>
             
            </div>
            {showList && <ItemList items={data.itemCards} />}
          </div>
          {/*Accordion Body*/}
          
        </div>
    );
};
export default RestaurantCategory;