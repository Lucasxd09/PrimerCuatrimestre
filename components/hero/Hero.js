import React from 'react'
import {Link} from 'react-router-dom'

import './Cuatro.css'

const Hero = () => {
    return (
        <div className='kal'>
            <div className="container">
                <div className="content">
                    <h1>Seguridad y Proteccion</h1>
                    <h1 className='blue'>De Windows</h1>
                    <p>Si presiona el boton podra ver una breve descripcion de los metodos de seguridad que tiene Windows</p>
                    <div>
                    <button ><Link to='/seguridad'>Seguridad y Proteccion</Link></button> 
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Hero
