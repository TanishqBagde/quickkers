import {useEffect ,useState} from "react";


const useOnlineStatus = () => {
     const [onlineStatus , setOnlineStatus] = useState(true);

     useEffect(() => {
       //we have to give a event listener provider us by the window 
       window.addEventListener("offline", () => {
           setOnlineStatus(false);
       });

       window.addEventListener("online", () =>{
           setOnlineStatus(true);
       });
        
     },[]);

    //return the boolean logic to check the internet connection
    return onlineStatus; 
};

export default useOnlineStatus;