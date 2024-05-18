import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";


class About extends Component {
    constructor(props){
    super(props);
  //console.log("Parent Constructor");
}

componentDidMount() {
    //console.log("Parent cDM");
    
}

render() {
    //console.log("Parent Render");
    return(
        <div className="About font-bold bg-yellow-50 border-solid ring-slate-600 rounded-4xl p-3 font-sans"><br>
        </br>
            <div className="text-4xl text-amber-800 text-center"><h1>About</h1></div><br></br>
            <UserClass name={"Tanishq Bagde (class)"} location = {"Indore"}/><br>
            </br>
            <br></br>
           <div>
              LoggedIn user:
              <UserContext.Consumer>
               {({LoggedIn}) => <h1 className="font-bold ">{LoggedIn}</h1> }
                  </UserContext.Consumer> 
            </div> 
          <div className="space-x-4 font-serif font-semibold text-gray-500 p-2 py-32">  <p className="flex-1 space-y-4"> 

Foodexpress is your premier destination for delicious and convenient food delivery services in Bhopal. As a leading food ordering website, we strive to provide our customers with an unparalleled culinary experience, right at their fingertips.

Founded in the vibrant city of Bhopal, Foodexpress has quickly emerged as a trusted name in the food industry, serving the diverse tastes and preferences of our customers with passion and dedication. Our mission is simple: to connect food lovers with their favorite restaurants and cuisines, all with the convenience of online ordering.

At Foodexpress, we understand the importance of quality, variety, and efficiency. That's why we've curated an extensive selection of restaurants, offering a wide range of cuisines to cater to every palate. From traditional Indian delicacies to international flavors, we've got something for everyone.

Whether you're craving savory street food, indulgent desserts, or healthy options, Foodexpress has you covered. With our user-friendly website and mobile app, ordering your favorite meals has never been easier. Simply browse through our extensive menu, select your desired items, and enjoy doorstep delivery in no time.

But Foodexpress is more than just a food delivery service – we're a team of food enthusiasts dedicated to providing exceptional customer service and fostering lasting relationships with our patrons. We take pride in our prompt delivery, seamless ordering process, and commitment to customer satisfaction.

As a locally owned and operated company in Bhopal, we are deeply ingrained in the community we serve. We believe in supporting local businesses, promoting culinary diversity, and contributing to the growth and vibrancy of our city.

Join us on a gastronomic journey like no other and experience the convenience, variety, and excellence that Foodexpress has to offer. Whether you're ordering for yourself, your family, or a gathering of friends, let Foodexpress be your go-to destination for all your food cravings. Welcome to the world of Foodexpress – where great food meets convenience!</p><br>
</br>
           <div className="font-bold text-teal-700 text-xl inline"> <h2>Enjoy your Food !</h2></div>
            </div>
        </div>
    );
};
}

export default About;