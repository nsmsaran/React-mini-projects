import React from "react";
import { useEffect,useState } from "react";
import "./Advice.css";
const Advice = () => {
    const [advice,setAdvice] = useState("Please click button to get advice");
    const [count,setCount] = useState(0);
    async function getAdvice () {
        const res = await fetch("https://api.adviceslip.com/advice")
        const data = await res.json();
        setAdvice(data.slip.advice);
        setCount((c) => c + 1);
    }

    useEffect(function(){
        getAdvice();
        setCount(0);
    },[]);

  return (
    <>
      <div>
        <h1>{advice}</h1>
        <button onClick={getAdvice}>Get Advice</button>
        <p>You have read <b>{count}</b> pieces of advice.</p>
      </div>
    </>
  );
};

export default Advice;
