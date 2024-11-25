import React, { useState } from 'react'
const color = ["red","green","yellow","purple","grey","lightgreen","lightblue","lightcyan"]

const ColorChanger = () => {
  const [colors,setColors] = useState("blue")
  const changeColor = () => {
    const changed = color[Math.floor(Math.random()* color.length)]
    setColors(changed)
  }
  return (
    <div style={{backgroundColor:colors , width: "100vw", height:"100vh"}}>
      <h1>Color Changer!</h1>
      <button onClick={changeColor}>Click Here To Change The Color</button>
    </div>
  )
}

export default ColorChanger
