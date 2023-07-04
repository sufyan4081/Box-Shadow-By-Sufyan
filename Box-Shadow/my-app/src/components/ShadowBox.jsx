import React from 'react'

const ShadowBox = ({ x, y, blur, spread, color, radius, height, width, bcg }) => {
  return (
    <div className='shadow__box'>
      <div className='shadow__div' style={{ boxShadow: `${x}px ${y}px ${blur}px ${spread}px ${color}`, borderRadius: `${radius}px`, height: `${height}vh`, width: `${width}vw`, backgroundColor: `${bcg}` }} >
        <div className='shadow__content'>
          <p>box-shadow : {x}px {y}px {blur}px {spread}px {color}</p>
          <p>-webkit-box-shadow:{x}px {y}px {blur}px {spread}px {color}</p>
          <p>-moz-box-shadow:{x}px {y}px {blur}px {spread}px {color}</p>
        </div>
      </div>
    </div>
  )
}

export default ShadowBox
