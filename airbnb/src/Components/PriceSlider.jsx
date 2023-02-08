import React from 'react'
import  './CSS/PriceSlider.css' 
import { useState, useEffect } from 'react'

export default function PriceSlider(props) {

 const [min,setMin] = useState(props.min);
 const [max,setMax] = useState(props.max);
 const [left,setLeft] = useState('0%')
 const [right,setRight] = useState('0%')

 function changeRangeMin(e){
    
  if((parseInt(e.target.value) - max) >= -props.step){
     console.log('Limite minimo alcançado')
  }else {
    setMin(parseInt(e.target.value))
    if(min == props.min){
      setLeft('0%')
    }else{
      var totalBarra = props.max - props.min;
      var qtsSteps = min - props.min;

      setLeft(((qtsSteps * 100) / totalBarra) + '%')
    }

  }

  
 }

 function changeRangeMax(e){

  if((parseInt(e.target.value) - min) <= props.step){
    console.log('limite Maximo alcançado')
  } else {
    setMax(parseInt(e.target.value))
    if(min == props.max){
      setRight('0%')
    }else{
      var totalBarra = props.max - props.min;
      var qtsSteps = props.max - max;
  
      setRight(((qtsSteps * 100) / totalBarra) + '%')
    }
  }
  
   
 
  

}

 useEffect(()=>{
   if(min === props.min){
     document.getElementById('inputMin').value = props.min
   }else {
    document.getElementById('inputMin').value = min;
   }
  },[min]);


  useEffect(()=>{
    if(max === props.max){
      document.getElementById('inputMax').value = props.max
    }else {
     document.getElementById('inputMax').value = max;
    }
   },[max]);

   function validacao(e){
    
    //CAMPO UNPUT MIN
    let inputMin = document.getElementById('inputMin')
    //PEGAR O VALOR DO CAMPO INPUT
    let valor = parseInt(e.target.value)
    //SE O CAMPO INPUT FOR INPUT MIN
    if(e.target.id == 'inputMin'){
      //VERIFICAR SE O CAMPO É VAZIO OU NULL
      if(e.target.value=="" || e.target.value==null){
        //SETAR PARA O MÍNIMO PERMITIDO
        setMin(props.min);
        setLeft('0%')
        //MUDAR O VALOR DO CAMPO INPUTMIN PARA VALOR MÍNIMO
        inputMin.value = props.min
      }
      //VERIFICAR SE VALOR É MENOR QUE MÍNIMO
      if(valor < props.min){setMin(props.min);
        setLeft('0%')
        //MUDAR O VALOR DO CAMPO INPUTMIN PARA VALOR MÍNIMO
        inputMin.value = props.min

      }else {
        //VALOR É MAIOR QUE MINIMO PERMITIDO - OK
        //VERIFICAR SE MIN É MAIOR QUE MAX
        if(valor >=max){
          let corrige = max - props.step;
          setMin(corrige);

          var totalBarra = props.max - props.min;
          var qtsSteps = valor - props.min


          setLeft(((qtsSteps * 100) / totalBarra) +'%');

          inputMin.value = corrige;
        }else{
          //TUDO CERTO
          setMin(valor);
          //MOVIMENTAR A BARRA
          var totalBarra = props.max - props.min;
          var qtsSteps = valor - props.min


          setLeft(((qtsSteps * 100) / totalBarra) +'%');
        }
      }
    }
   }

  return (
    <div>

        <div className='slider'>
           <div style={{left: left, right:right}} className='progress'></div>
           <div className='range-input'>

           <input id='rangeMin' onChange={changeRangeMin} type="range" min={props.min} max={props.max} value={min} step={props.step}  />
            <input id='rangeMax' onChange={changeRangeMax}  type="range" min={props.min} max={props.max} value={max} step={props.step} />
            
           </div>
        </div>

        <div className='row mt-4'>
          <div className='col'>
            <label className='text-muted' >preço minimo</label>
            <div class="input-group mb-3">
           <span class="input-group-text" id="basic-addon1">R$</span>
           <input id='inputMin' onBlur={validacao} type="text" class="form-control" placeholder="Min" />
           </div>
          </div>

          <div className='col'>
            <label className='text-muted' >preço máximo</label>
            <div class="input-group mb-3">
           <span class="input-group-text" id="basic-addon1">R$</span>
           <input id='inputMax' type="text" class="form-control" placeholder="Max" />
           </div>
          </div>
        </div>

    </div>
  )
}

