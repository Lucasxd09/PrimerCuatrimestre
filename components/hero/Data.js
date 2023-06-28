import React from 'react'
import {Link} from 'react-router-dom'

import './Uno.css'

const Data = () => {
    return (
        <div className='hero'>
            <div className="container">
                <div className="content">
                    <h2><span>Historia</span> de  Windows</h2>
                    <p>Si presiona el siguiente se mostrara la historia de este sistema operativo, desde su comienzo hasta como esta en la actualidad.</p>
                    <div>
                        <button ><Link to="recovery">Ver Historia</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Data
