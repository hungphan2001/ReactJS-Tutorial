import { useDispatch } from 'react-redux'
import React from 'react'

const Button = () => {
  const dispatch = useDispatch();
  const updateNumber = ()=>{
   dispatch({
    type: 'GET NUMBER',
   });
  };

  const resetNumber = ()=>{
    dispatch({
      type: 'GET RESET',
     });
  };
  return (
    <div>
    <button onClick={updateNumber}className="btn btn-dark">Get number</button>
    <button onClick={resetNumber} className="btn btn-dark">Reset</button>
  </div>
  )
}

export default Button