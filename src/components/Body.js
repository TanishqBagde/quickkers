import RestaurantCard from "./RestaurantCard";
import {useState, useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";
import UserContext from "../utils/UserContext";

const Body = () => {
    //local State variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);//setListOfRestaurants is a variable given to modify the list
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText,setSearchText]= useState("");   
    
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect ( () => { 
        fetchData();
     },[]);

     const fetchData = async () => {
           
          const data = await fetch(
              "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9351929%26lng%3D77.62448069999999%26page_type%3DDESKTOP_WEB_LISTING%26limit%3D20"
              );
          
          const json = await data.json();

          console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          
          // Extract restaurant data from each card
          setListOfRestaurants(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );
          setFilteredRestaurants(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );
          // Update state with the new restaurant data
         // setListOfRestaurants(restaurant);
          
        
      };
       
      //Conditional Rendering
       if (listOfRestaurants === 0){
          return <Shimmer/>
       };
    

       const onlineStatus = useOnlineStatus();
       if(onlineStatus === false ) return( <h1>Looks like you are Offline your internet Connnection has Lost</h1>);

       //const {LoggedIn,setUserName} = useContext(UserContext); 

     return listOfRestaurants.length === 0 ? (
         <Shimmer />
         ) : (
    <div className ="Body bg-yellow-50 border-solid  border-yellow-800 rounded-lg ">
      
        <div className="flex items-center px-3 pt-1 py-1 bg-teal-700 m-8 rounded-2xl "> 
         <div className ="search m-4 p-4 rounded-1xl">
             <input type="text"  placeholder=" Search your Cravings !!"
             className="border  border-black p-1 rounded-2xl"
              value={searchText}
              onChange={(e) => {
                  setSearchText(e.target.value)
              }}
               />
             <button className=" px-3 py-1 bg-white m-4 rounded-2xl"
                onClick={() => { 
                    //Filter the restaurants cards and update the UI
                    //searchText
                    console.log(searchText);
                    const filteredRestaurants = listOfRestaurants.filter(
                        restaurant=> restaurant.info.name.toLowerCase().includes (searchText.toLowerCase())   //Important line 
                        );
                        setFilteredRestaurants(filteredRestaurants);
                        
                }}
             >Search</button>
         </div >
         <div className=" flex items-end ml-8">
          <button 
          className="filter-btn px-4 py-2  bg-teal-200 m-9 rounded-2xl ml-6 mb-1 absolute flex right-4  " 
          onClick = { () => {
             //filter logic
              const filteredList = listOfRestaurants.filter(
                 (restaurant => restaurant.info.avgRating > 4)
             );
             setFilteredRestaurants(filteredList); //updating the ListOfRestaurants with the filter list
 
           {filteredRestaurants}
          }}>Top Rated restaurants</button>
          </div>
         
         
          
        </div>
        
        <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
   
        <Link className ="d"
     key={restaurant.info.id} 
     to={"/restaurants/" + restaurant.info.id}
    > 
    {restaurant.info.isOpen ? (
      <RestaurantCardPromoted resData={restaurant} />
    ) : (
      <RestaurantCard  resData={restaurant} />
    )}
    </Link>
    
  ))}
 </div>
</div>

         );
  };

export default Body;
