import React from 'react'
import './navbar.css'
import { Menu } from 'lucide-react';
import logo from '../../assets/logo.png'
export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar-logo'>
            <img src={logo} alt="" />
            <Menu className='navbar-menu-bar'></Menu>
        </div>
        <div className='navbar-menu'>
            <ul>
                <li>Crypto-Taxes</li>
                <li>Free Tools</li>
                <li>Resources Center</li>
                <li className='btn'><button>Get Started</button></li>
            </ul>
        </div>
      
    </nav>
  )
}
