import React from 'react'
import "../styles/header.css"
import Logo from "../assets/logo.svg"
import Button from '../components/button'
const header = () => {
    const handleClick = () => {
        alert('Button clicked!');
      };
  return (
    <div>
        <p className='header'>✨Discover Your Dream Property with SoftKey🔑</p>
        <div className='Navbar'>
            <p className='logo'><img className='logo-img' src={Logo} alt="Softkey"/>SoftKey</p>
            <div>
                <ul className='nav-pages'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Properties</li>
                    <li>Services</li>
                </ul>
            </div>
            <div>
            <Button 
                label="Contact Us" 
                onClick={handleClick} 
                className="ContactUs-btn" 
            />
            </div>
        </div>
        
    </div>
  )
}

export default header