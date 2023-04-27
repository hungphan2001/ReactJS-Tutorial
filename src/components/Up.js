import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Up = () => {
  const number = useSelector((store)=>store.upreducer.num)
  const dispatch = useDispatch();
  const update = ()=>{
    dispatch({
      type:'Up',
    })
  }

  const reset = () =>{
    dispatch({
      type:'Reset',
    })
  }
  return (
    <div class="timer bg-info" id="timer-up">
                    <p>{number}</p>
                    <button onClick={update}type="button" class="btn btn-dark">Up</button>
                    <button onClick={reset}type="button" class="btn btn-dark">Reset</button>
                </div>
  )
}

export default Up