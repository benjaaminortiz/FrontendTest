import React from 'react'
import './Navbar.css'
import Tab from './Tab'
import Logo from '../files/Group.png'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={Logo} alt='logo' style={{ width: '200px', objectFit: 'contain', padding: '20px'}}></img>

        <div className='tabgroup'
        >
        <Link to='/'><Tab content='Home' /></Link>
        <Tab content='About' />
        <Tab content='Contact' />
        <Tab content='Blog' />
        <Tab content='Careers' />
        </div>
        <button className='gradient'>Request Invite</button>
        </div>
    
  )
}

export default Navbar