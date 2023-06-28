import React from 'react'
import {Link} from 'react-router-dom'

import './Cinco.css'

const AplicacionesInd = () => {
    return (
        <div className='sal'>
            <div className="container">
                <div className="content">
                    <h2><span>Aplicaciones</span> de  Windows</h2>
                    <p>Si presiona el siguiente se mostrara las aplicaciones mas importantes de Windows.</p>
                    <div>
                        <button ><Link to='/aplicaciones'>Aplicaciones y Software</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AplicacionesInd
