import React, { useState } from 'react'

const Tiltle = ({show,handleClick}) => {
  return (
    <>
    {
      show ?(<h4 onDoubleClick={()=>handleClick(!show)} >What is Lorem Ipsum?</h4>)
      :(<input onBlur={()=>handleClick(!show)}type='text' name='txt' value='What is Lorem Ipsum?'></input>)
    }
    </>
  )
}

export default Tiltle