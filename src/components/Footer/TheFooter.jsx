import React from 'react'
import { Link } from 'react-router-dom'
import './TheFooter.styles.scss'

const TheFooter = () => {
  return (
    <>
        <footer>
            <ul className='main-footer'>
                <li className='footer-item'>
                    <a className='footer-link'>
                    ©️ 2024 The New York Times
                    </a>
                </li>
                <li className='footer-item'>
                    <a className='footer-link'>
                    Contact Us
                    </a>
                </li>
                <li className='footer-item'>
                    <a className='footer-link'>
                    Privacy Policy
                    </a>
                </li>
            </ul>
        </footer>
    </>
    )
}

export default TheFooter