import React, {useState} from "react";

 

//create your first component
const TrafficLight = () => {

    const [colorRed,setColorRed] = useState("none");
    const [colorYellow,setColorYellow] = useState("none");
    const [colorGreen,setColorGreen] = useState("none");


   function onRed(){
        if (colorRed == "none"){
            setColorRed("0 0 15px 10px red");
            setColorYellow("none");
            setColorGreen("none");
        } else {
            setColorRed("none");
        }
      
      }

      function onYellow(){
        if (colorYellow == "none"){
            setColorYellow("0 0 15px 10px yellow");
            setColorRed("none");
            setColorGreen("none");
        } else {
            setColorYellow("none");
        }
      
      }

      function onGreen(){
        if (colorGreen == "none"){
            setColorGreen("0 0 15px 10px green");
            setColorRed("none");
            setColorYellow("none");
        } else {
            setColorGreen("none");
        }

      }

     
      

  return (
 
     <div className="container bg-dark d-flex align-items-center" style={{width: "100px", height: "270px"}}>
        <div className="text-center">
         <div className="rounded-circle bg-danger my-2" onClick= {onRed}style={{height: "80px", width: "80px", boxShadow: colorRed}}></div>
         <div className="rounded-circle bg-warning  my-2" onClick= {onYellow} style={{height: "80px", width: "80px", boxShadow: colorYellow}}></div>
         <div className="rounded-circle bg-success  my-2" onClick={onGreen} style={{height: "80px", width: "80px", boxShadow: colorGreen}}></div>
         </div>     
       </div>

  );
  };

export default TrafficLight;
