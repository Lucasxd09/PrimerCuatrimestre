import React from 'react'
import {Link} from 'react-router-dom'

import './Dos.css'

const Versiones = () => {
    return (
        <div className='pal'>
            <div className="container">
                <div className="content">
                    <h1>Versiones</h1>
                    <h1 className='blue'>De Windows</h1>
                    <p>Si presiona el boton,vera una descripcion de todas las versiones que tuvo Windows desde su fundacion</p>
                    <div>
                    <button ><Link to='/cloud'>Versiones</Link></button>
                    
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Versiones
