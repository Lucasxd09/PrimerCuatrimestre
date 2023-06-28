import React from 'react'
import {Link} from 'react-router-dom'

import './Tres.css'

const Actualidadind = () => {
    return (
        <div className='val'>
            <div className="container">
                <div className="content">
                    <h2><span>Actualidad</span> de  Windows</h2>
                    <p>Si presiona el boton , se le mostrara la version mas reciente del sistema operativo.</p>
                    <div>
                        <button ><Link to='/contact'>Actualidad</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Actualidadind
