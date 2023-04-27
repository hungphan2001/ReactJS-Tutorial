import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Down = () => {
  const number = useSelector((store)=>store.downreducer.num)
  const dispatch = useDispatch();
  const update = ()=>{
    dispatch({
      type:'Down',
    })
  }

  const reset = () =>{
    dispatch({
      type:'Reset_down',
    })
  }
  return (
    <div className="timer bg-danger" id="timer-down">
        <p>{number}</p>
        <button onClick={update} type="button" className="btn btn-dark">Down</button>
        <button onClick={reset} type="button" className="btn btn-dark">Reset</button>
      </div>
  )
}

export default Down