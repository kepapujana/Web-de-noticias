import React from 'react'
import { Link } from 'react-router-dom'
import './TheHeader.styles.scss'


const TheHeader = () => {
  return (
    <>
        <nav>
            <ul className='nav-menu'>
                <li className='nav-menu-item'>
                    <Link to="/" className='nav-menu-link'>
                    Home
                    </Link>
                </li>
                <li className='nav-menu-item'>
                    <Link to="/form" className='nav-menu-link'>
                    Form
                    </Link>
                </li>
                <li className='nav-menu-item'>
                    <Link to="/list" className='nav-menu-link'>
                    List News
                    </Link>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default TheHeader