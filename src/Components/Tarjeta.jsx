import React from 'react'

import logoTarjeta from '../../public/images/card-logo.svg'
import '../css/tarjetas.css'

const Tarjeta = ({data}) => {
  const{nombre,numero,mes,year} = data
  return (
    <div className='tarjetas'>
        <div className='tarjeta-rever'></div>
            <div className='tarjeta-frente'>
                <div>
                    <img className='logo-tarjeta' src={logoTarjeta} alt="logo-tarjeta" />
                </div>
            <div>
                <div>
                    <p className='numero blanco'>{numero}</p>
                </div>
                <div className='tarjeta-datos'>
                    <p className='nombre blanco'>{nombre}</p>
                    <p className='fecha blanco'>{`${mes} / ${year}`}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tarjeta