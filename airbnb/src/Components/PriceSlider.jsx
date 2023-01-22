import React from 'react'
import  './CSS/PriceSlider.css' 

export default function PriceSlider() {
  return (
    <div>
        <div className='slider'>
           <div className='progress'></div>
           <div className='range-input'>
            <input id='rangeMin' type="range" />
            <input id='rangeMax' type="range" />
           </div>
        </div>
    </div>
  )
}

