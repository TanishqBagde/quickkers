import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
//this import is not used in the lazy loading,,     import Grocery from "./components/Grocery";
import { lazy, Suspense } from "react";
import UserContext from "./utils/UserContext";
import {useState, useContext} from "react";
import { useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";



// lazy loading is being used for the grocery to make our application light weight

const Grocery = lazy(() => import("./components/Grocery")) ;




const AppLayout = () => {
    const [userName , setUserName] = useState();

    useEffect(() => {
        const data = {
            name:"Tanishq Bagde",
        };
        setUserName(data.name);
    },[])

    return (
        <Provider store={appStore}>
          <div className ="bg-teal-050">
            <UserContext.Provider value={{LoggedIn: userName}}>
             <Header/>
             <Outlet/>
             </UserContext.Provider>
          
          </div>
        </Provider>
    );

}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path:"/",
                element: <Body/>,
            },
            {
                path:"/about",
                element: <About/>,
            },
            {
                path:"/ContactUs",
                element: <ContactUs/>,
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu/>,
            }, 
            {
                path:"/Grocery",
                element: <Suspense>  <Grocery/> </Suspense>,
            },
            {
                path:"/Cart",
                element: <Suspense>  <Cart /> </Suspense>,
            },
           
        ],  
    },
    
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/> );

