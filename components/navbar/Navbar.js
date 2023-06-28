import React, { useState } from 'react'
import { SiDatabricks } from 'react-icons/si'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


    return (
        <div name='top' className='navbar'>
            <div className="container">
                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/recovery'>Historia</Link> </li>
                    <li><Link to='/cloud'>Versiones</Link></li>
                    <li><Link to='/contact'>Actualidad</Link></li>
                    <li><Link to='/seguridad'>Seguridad y Proteccion</Link></li>
                    <li><Link to='/aplicaciones'>Aplicaciones y Software</Link></li>
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar
