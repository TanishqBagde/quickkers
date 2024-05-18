import {useState, useContext} from "react";
import {Link} from  "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useContext} from "react";
import { useSelector } from "react-redux";



const Header = () => {
    const [btnNameReact, setBtnNamereact] = useState("Login");
    console.log("Header Render");

    const onlineStatus = useOnlineStatus();
    const {LoggedIn} = useContext(UserContext);
     
    // Subscribing to the store using a Selector 
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

 
    return(
  

      <div className="flex justify-between bg-teal-100 shadow-lg mb-1 mr-2 ml-2 p-4 rounded-2xl py-4 border-4 border-yellow-200">
          
        <div className="Logo-Container ">
            <img className="w-32 rounded-full object-cover" src = "https://as1.ftcdn.net/v2/jpg/01/28/70/32/1000_F_128703265_2SWua4mjNSWNMLb6RxqQXAntNMSZ1wMt.jpg" />
        </div>
        <div className="Heading text-7xl p-5 font-serif text-amber-700 hover:text-teal-600 transition duration-300  ">
            <h1>quicKKers</h1>
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4 text-teal-600 space-x-4 "> 
                <li className="px-3 font-bold">
                   Online Status: {onlineStatus ? "✅" : "❌" }
                </li>
                <li className="px-3 cursor-pointer font-bold hover:text-orange-300 transition duration-300 ">
                    <Link className="a" to="/">Home</Link>
                </li>  
                <li className="px-3 cursor-pointer font-bold hover:text-orange-300 transition duration-300 ">
                    <Link className="a" to="/about">About</Link>
                </li>
                <li className="px-3 cursor-pointer font-bold hover:text-orange-300 transition duration-300 ">
                    <Link className="a" to="/ContactUs">Contact Us</Link>
                </li>
                <li className="px-3 font-bold cursor-pointer hover:text-orange-300 transition duration-300 ">
                    <Link className="a" to="/Grocery">Grocery</Link>    
                </li>
                <li className="px-2 font-bold cursor-pointer hover:text-orange-300 transition duration-300 text-yellow-800 text-xl ">
                    <Link className="a" to="/Cart">Cart({cartItems.length})🛒</Link>
                </li>
                <button className ="px-3 cursor-pointer text-black bg-teal-300 rounded-lg hover:bg-teal-400 hover:text-white transition duration-300  text-sm"
                  onClick = { () => {
                      btnNameReact === "Login"
                      ? setBtnNamereact ("Logout")
                      : setBtnNamereact ("Login"); 
                      
                  }}
                  >
                  {btnNameReact}
                
               </button>
              
               
            </ul>

        </div>
    </div>
    );   
} 
export default Header;
