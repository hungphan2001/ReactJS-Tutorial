import React from 'react'

const Small = ({ listImage, updateImg, checked }) => {

  return (
    <div id="small">
      {
        listImage.map((item, index) => <img className={index === checked ? 'active' : ''}
          src={item}
          alt='' onClick={() => updateImg(item, index)}
        ></img>)
      }
    </div>
  )
}

export default Small