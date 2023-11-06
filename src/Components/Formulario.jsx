import {useState} from 'react'

import {getMeses,getYears,addData, handleSubmit} from '../funciones/app.js'
import imagen from '../../public/images/icon-complete.svg'

import '../css/formulario.css'

const Formulario = ({setData,data}) => {


  const [validado,setValidado]=useState(false)
  const meses=getMeses()
  const years=getYears()

  

  return (
    <div className='formulario'>
      {validado ? 
        <div className='validado'>
          <img src={imagen} alt="complete" />
          <div style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center'
          }}>
            <h1 style={{textTransform:'uppercase'}}>gracias!!</h1>
            <p style={{textAlign:'center'}}>Hemos agregado los Detalles de su Tarjeta</p>
          </div>
        </div>  : 
      
      <form
        onSubmit={e=>{handleSubmit(e,data,setValidado)}}
        className='form'>
        <div className='item'>
          <label>Nombre del Titular</label>
          <input 
            type="text" 
            placeholder='ej. jose eduardo sanchez soto' 
            onChange={e=>{addData(e,'nombre',setData,data)}}/>
        </div>

        <div className='item'>
          <label>Numero de Tarjeta</label>
          <input
            type="number"
            maxLength={16}
            placeholder='ej.4841523137859685'
            onChange={e=>{addData(e,'numero',setData,data)}}/>
        </div>

        <div className='item'>
            <div className='fecha-cvv'>
                <div className='fecha'>
                    <label>Fecha de Exp. &#40; MM AA &#41; </label>
                    <div className='div-select'>
                        <select 
                          onChange={e=>{addData(e,'mes',setData,data)}}
                          name="mes"
                          id="mes">
                          <option value="">MM</option>
                          {meses.map(mes=>(
                            <option key={mes}  value={mes}>{mes}</option>
                          ))}
                        </select>

                        <select
                          onChange={e=>{addData(e,'year',setData,data)}}
                          name="year"
                          id="year">
                          <option value="">AA</option>
                          {years.map(year=>(
                            <option key={year} value={year}>{year}</option>
                          ))}
                        </select>
                    </div>
                </div>

                <div>
                  <label>CVV</label>
                  <input className='input-cvv' type="password" placeholder='ej. 123' />
                </div>
            </div>
        </div>
        
        <input className='boton' type="submit" value='confirmar'/>
      </form> }
    </div>
  )
}

export default Formulario