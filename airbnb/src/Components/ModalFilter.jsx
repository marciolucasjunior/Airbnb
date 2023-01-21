import React from 'react'
import PriceSlider from './PriceSlider'

export default function ModalFilter() {
  return (
    <div className="modal fade" id="filterModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header text-center">

        <h1 className="w-100 modal-title fs-5" id="exampleModalLabel">Filtros</h1>

        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

      </div>

      <div className="modal-body">
         <section className='px-2 mb-4 border-bottom'>
           <span className='fs-4 fw-bold'>Faixa de Preço</span>
           <p className='text-muted'>O preço médio por noite é de R$730</p>
           <PriceSlider />
         </section>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  )
}
