
import React, { useState } from "react";
import Large from "./components/Large";
import Small from "./components/Small";
const App = () => {

  const listImage = [
    "images/img-1.jpg",
    "images/img-2.jpg",
    "images/img-3.jpg",
  ]

  const [image, setImage] = useState(listImage[0]);
  const [checked, setChecked] = useState(0);
  const updateImg = (url, index) => {
    setImage(url)
    setChecked(index)
  }
  return (
    <>
      <Large image={image}></Large>
      <Small
        listImage={listImage}
        updateImg={updateImg}
        checked={checked}></Small>
    </>
  )

}

export default App;