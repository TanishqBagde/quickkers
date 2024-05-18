import {useContext} from "react";
import {CDN_URL} from "../utils/constants";
import UserContext from "../utils/UserContext";


const RestaurantCard = (props) => {
    const { resData } = props;

    const {LoggedIn} = useContext(UserContext);

    const {
        cloudinaryImageId,
        cuisines,
        name,
        avgRating,
        costForTwo,
        sla,
      } = resData?.info;
    

   
    return (
    <div 
      data-testid="resCard"
      className ="res-card m-4 p-4 w-[320px] bg-teal-100 rounded-2xl hover:bg-yellow-200">
        <img 
        alt ="res-logo"
        className="rounded-2xl py-1 w-[100%] h-60" 
        src ={CDN_URL + cloudinaryImageId} />
        <h3 className="font-bold py-2 text-lg text-teal-600">{name}</h3>
        <h5 className="cuisines "> { cuisines.join(", ") }</h5>
        <h4> {avgRating} stars</h4>
        <h4> {costForTwo} </h4>
        <h5>{sla.slaString} </h5>
        <h6>User: {LoggedIn}</h6>
        
        
        
         

    </div>
    );
};


export const withPromotedLabel = (RestaurantCard) => {
  return (props) =>{ 
  return (
    <div>
      <label className="absolute bg-red-400 text-white rounded-lg p-1">Is Open</label>
      <RestaurantCard {...props} />
    </div>
  );
 };
}; 
export default RestaurantCard;

//ONLY USING JAVASCRIPT
//API's through javascript(POST, GET, PUT requests) - test using POSTMAN
//form handling, submission, getting data and showing on UI
//user registration, password hashing
//HTML dynamic content rendering

//FORM HANDLING
//Done Create basic html form
//submit and store data in a variable
//show data in console/UI

//2nd part
//handle required field, show error if field is unfilled

//3rd part
//save data in database
//get data from database and render on UI
