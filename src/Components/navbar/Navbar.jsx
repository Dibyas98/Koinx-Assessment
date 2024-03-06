import React from 'react'
import './navbar.css'
import { Menu } from 'lucide-react';
export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar-logo'>
            <h1>Logo</h1>
            <Menu className='navbar-menu-bar'></Menu>
        </div>
        <div className='navbar-menu'>
            <ul>
                <li>Crypto-Taxes</li>
                <li>Free Tools</li>
                <li>Resources Center</li>
                <li><button>Get Started</button></li>
            </ul>
        </div>
      
    </nav>
  )
}
