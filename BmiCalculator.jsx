import { useState } from 'react';
import './App.css';
import bmiPicture from './im/bmiPicture.jpg';

function Apps(){
    const [height,setHeight] = useState("")
    const [weight,setWeight] = useState("")
    const [bmi,setBmi] = useState(null)
    const [bmiStatus,setBmiStatus]  = useState("")
    const [errorMessage,setErrorMessage] = useState("")
  
    const calculateBmi = () => {
      const isValidHeight = /^\d+$/.test(height);
      const isValidWeight = /^\d+$/.test(weight);
  
  
      if (isValidHeight && isValidWeight) {
        const heightInMeters = height / 100;
        const bmiValue = weight / (heightInMeters * heightInMeters);
        setBmi(bmiValue.toFixed(2));
        if (bmiValue < 18.5) {
          setBmiStatus("Underweight");
        }
        else if (bmiValue >= 18.5 && bmiValue < 24.9) {
          setBmiStatus("Normal Weight");
        }
        else if (bmiValue >= 25 && bmiValue < 29.9) {
          setBmiStatus("Overweight");
        }
        else {
          setBmiStatus("Obese");
        }
        setErrorMessage("");
      }
      else {
        setBmi(null);
        setBmiStatus("");
        setErrorMessage("Please enter valid numeric values for height and weight.");
      }
    };
    const clearAll = () =>{
      setHeight("");
      setWeight("");
      setBmi(null);
      setBmiStatus("");
      setErrorMessage("");
  
    }
     return(
      <>
        <div className="container">
            <div className="bmi-image"></div>
            <div className="bmi-content">
              <h1>BMI Calculator</h1>
              <p className="error">{errorMessage}</p>
              <div className="inputs">
                <input type="text" placeholder="Enter your Height" value={height} onChange={(e) => setHeight(e.target.value)}></input>
              </div>
              <div className="inputs">
                <input type="text" placeholder="Enter your Weight" value={weight} onChange={(e) => setWeight(e.target.value)}></input>
              </div>
              <button onClick={calculateBmi}>Calculate BMI</button>
              <button onClick={clearAll}>Reset</button>
              {bmi !== null && (
                <div className="result-container">
                  <p>Your BMI is : {bmi}</p>
                  <p>Status : {bmiStatus} </p>
                </div>
              )}
              
            </div>
          </div>
      </>
    )
  }
  
  export default Apps;
