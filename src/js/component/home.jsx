import React, { useState, useEffect } from 'react';

 

//create your first component
const TrafficLight = () => {

    const [colorRed,setColorRed] = useState("none");
    const [colorYellow,setColorYellow] = useState("none");
    const [colorGreen,setColorGreen] = useState("none");
    const [sizeTraffic, setSizeTraffic] = useState("270px")
    const [colorPurpleView, setColorPurpleView] = useState("none");
    const [colorPurpleTF, setColorPurpleTF] = useState(false);
    const [colorPurple,setColorPurple] = useState("none");


   const onRed = () => {
        if (colorRed == "none"){
            setColorRed("0 0 15px 10px red");
            setColorYellow("none");
            setColorGreen("none");
            setColorPurple("none");
        } else {
            setColorRed("none");
        }
      
      }

      const onYellow = () =>{
        if (colorYellow == "none"){
            setColorYellow("0 0 15px 10px yellow");
            setColorRed("none");
            setColorGreen("none");
            setColorPurple("none");
        } else {
            setColorYellow("none");
        }
      
      }

      const onGreen = () =>{
        if (colorGreen == "none"){
          setColorGreen("0 0 15px 10px green");
            setColorRed("none");
            setColorYellow("none");
            setColorPurple("none");
        } else {
          setColorGreen("none");
        }
        }

        const onPruple = () =>{
          if (colorPurple == "none"){
              setColorPurple("0 0 15px 10px purple");
              setColorRed("none");
              setColorYellow("none");
              setColorGreen("none");
          } else {
            setColorPurple("none");
          }
          }

        //Alentar sentido del Semaforo
        const alternarColor = () => {
          //Si esta verde seteo amarillo
          if (colorGreen != "none"){
            setColorGreen("none");
            setColorRed("none");
            setColorYellow("0 0 15px 10px yellow");
          } //Si esta amarillo seteo rojo 
          else if (colorYellow != "none") {
            setColorRed("0 0 15px 10px red");
            setColorYellow("none");
            setColorGreen("none");
          } // Si esta rojo seteo verde 
          else if (colorRed != "none") {
            
            if (colorPurpleTF) {
              setColorPurple("0 0 15px 10px purple");
              setColorYellow("none");
             setColorGreen("none");
             setColorRed("none");
            } else {
              setColorGreen("0 0 15px 10px green");
              setColorRed("none");
              setColorYellow("none");
            }
           
          } else if (colorPurple != "none" && colorPurpleTF){
            setColorGreen("0 0 15px 10px green");
            setColorRed("none");
            setColorYellow("none");
            setColorPurple("none");

          }
           //Si estan todos apagados seteo uno random
          else {
            let number = Math.floor(Math.random() * 4) + 1;
            if (number == 1){
              setColorGreen("0 0 15px 10px green");
            } else if (number == 2) {
              setColorRed("0 0 15px 10px red");
            } else if (number == 3) {
              setColorYellow("0 0 15px 10px yellow");
            } else if (number == 4 && colorPurpleTF) {
              setColorPurple("0 0 15px 10px purple");
            }
            
          }
        }

        let ocultar = true;
        const newColor = () => {
          if (ocultar==true) {
             ocultar=false;
             setColorPurpleView("");
             setColorPurpleTF(true);
             setSizeTraffic("370px");
          } else if (ocultar==false) {
            setColorPurpleView("none");
             setColorPurpleTF(false);
             setSizeTraffic("270px");

          }
          
        }
        
  return (
    <>
    <div className="container">
    <div className="m-auto d-flex bg-dark justify-content-center" style={{height: "100px", width: "15px"}}></div>
     <div className="bg-dark d-flex align-items-center rounded justify-content-center m-auto" style={{width: "100px", height: sizeTraffic}}>
      <div className="text-center">
         <div className="rounded-circle bg-danger my-2" onClick= {() => onRed()} style={{height: "80px", width: "80px", boxShadow: colorRed}}></div>
         <div className="rounded-circle bg-warning  my-2" onClick= {() => onYellow()} style={{height: "80px", width: "80px", boxShadow: colorYellow}}></div>
         <div className="rounded-circle bg-success  my-2" onClick={() => onGreen()} style={{height: "80px", width: "80px", boxShadow: colorGreen}}></div>
         <div className="rounded-circle my-2"  onClick={() => onPruple()} style={{height: "80px", width: "80px",backgroundColor: "purple" ,display: colorPurpleView, boxShadow: colorPurple}}></div>
         </div>

       </div>
       <div className="m-auto d-flex justify-content-center my-3"><button onClick={() => alternarColor()}>ALTERNAR</button></div>
       <div className="m-auto d-flex justify-content-center my-3"><button onClick={() => newColor()}>NEW COLOR</button></div>

       </div>

       </>
       

  );
  };

export default TrafficLight;
