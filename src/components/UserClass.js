import React from "react";

class UserClass extends React.Component{

    //Receiving the class base component by creating a constructor
     constructor(props){
         //using a super keyword for props
         super(props); 
        

         this.state ={
            userInfo: {
                login:"Dummy", 
                location:"default",
                 
            },
             
         };
         //console.log(this.props.name + "Child Constructor")
     }  

     async componentDidMount(){
         //console.log(this.props.name+"Child cDM");
         const data = await fetch("https://api.github.com/users/TanishqBagde");
         const json = await data.json();

         
          
         this.setState({
             userInfo: json,
         });
         console.log(json);   
         }

         componentDidUpdate() {
             console.log("Component is Updated");
         }
         

    render() { 
        
        const {login, location, avatar_url} = this.state.userInfo;

        //console.log(this.props.name +"Child render");
        return (
            <div className="user-card font-serif font-bold text-teal-600">
              
              <h2>Name:{login}</h2>
              <h3>Location:{location}</h3>
               <div className="w-56 flex-none absolute right-6 py--5"><img className=" rounded-full"src ={avatar_url}/></div>
              <h4>Contact info: tanishqbagde1618@gmail.com</h4>
            </div>
        );
    } ;
    
}
export default UserClass;