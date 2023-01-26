import React from 'react'
import  './CSS/PriceSlider.css' 

export default function PriceSlider() {
  return (
    <div>

        <div className='slider'>
           <div className='progress'></div>
           <div className='range-input'>
            <input id='rangeMax'  type="range" />
            <input id='rangeMin' type="range" />
           </div>
        </div>

        <div className='row mt-4'>
          <div className='col'>
            <label className='text-muted' >preço minimo</label>
            <div class="input-group mb-3">
           <span class="input-group-text" id="basic-addon1">R$</span>
           <input id='inputMin' type="text" class="form-control" placeholder="Min" />
           </div>
          </div>

          <div className='col'>
            <label className='text-muted' >preço máximo</label>
            <div class="input-group mb-3">
           <span class="input-group-text" id="basic-addon1">R$</span>
           <input id='inputMin' type="text" class="form-control" placeholder="Max" />
           </div>
          </div>
        </div>

    </div>
  )
}

