import React from 'react'

import { useState } from 'react';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import"swiper/css/navigation";



// import required modules
import { Pagination,Navigation } from "swiper";

//importar css
import './CSS/Categorias.css'

//importar dados da categoria

import { categorias } from '../../../backend/dados';





export default function Categorias() {
//Código do componente

const [idClicado, setIdClicado] = useState(1)

const handleClick = (e,id)=> {
  console.log('A categoria clicado é'+ id)
  setIdClicado(id)
}


  return (
    <div className='container-fluid d-flex justify-content-between align-items-center '>
        <div className='d-flex align-items-center container-airbnb row'>
            <div className='col-sm-11'>
            <Swiper
        slidesPerView={14}
        slidesPerGroup={13}
        spaceBetween={7}
        pagination={false}
        navigation={true}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        {
          categorias.map((dados,index)=>(
            <SwiperSlide key={dados.id}
            virtualIndex={index}
            className={dados.id === idClicado ? 'active' : ''}
            onClick={(e) => handleClick(e , dados.id)}>
             
              <img className='mb-2' src={dados.imagem}/>
              <span>{dados.titulo}</span>
            </SwiperSlide>
          ))
        }
        
      </Swiper>
            </div>
            <div className=' col-sm-1'>
               aqui filtro
            </div>
        </div>
    </div>


  )
}
