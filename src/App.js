
import React, { useState } from "react";
import Slide from "./components/Slide";
import Button from "./components/Button";
const App =()=>{
  const [img,setImg]= React.useState("./images/banner-1.jpg");
  const UpdateNewImg1 =()=>setImg("images/banner-1.jpg");
  const UpdateNewImg2 =()=>setImg("images/banner-2.jpg");
  const UpdateNewImg3 =()=>setImg("images/banner-3.jpg");
  return(
<>

<Slide img={img}></Slide>
<Button 
UpdateNewImg1={UpdateNewImg1} 
UpdateNewImg2={UpdateNewImg2} 
UpdateNewImg3={UpdateNewImg3}>
</Button>
</>
  )

}

export default App;