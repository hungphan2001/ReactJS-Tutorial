import React from 'react'

const Button = ({UpdateNewImg1,UpdateNewImg2,UpdateNewImg3}) => {
  return (
    <>
    	<p id="slide-num">
		<a honClick={UpdateNewImg1}>1</a> 
		<a onClick={UpdateNewImg2}>2</a>
		<a onClick={UpdateNewImg3}>3</a>
	</p>
    </>
  )
}

export default Button