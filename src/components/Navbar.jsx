import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-light bg-light shadow-sm mt-1'>
        {/* Below is the navbar logo /brand */}
        <Link to="/" className='navbar-brand fw-bold'>Soko<span className='text-danger'>Garden</span></Link>
        {/* toggle button */}
        <button
        className='navbar-toggler'
        data-bs-toggle ="collapse"
        data-bs-target ="#navbarcontents"      
        >
            <span className='navbar-toggler-icon'></span>

        </button>
        <div id="navbarcontents" className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
                <li className='nav-item'>
                    <b><Link to = "/" className='nav-link'>Home</Link></b>

                </li>
                <li className='nav-item'>
                    <b><Link to = "/addproduct" className='nav-link'>Sell</Link></b>

                </li>
                </ul>
                <ul className='navbar-nav ms-auto'>
                <li className='nav-item'>
                    <b><Link to = "/aboutus" className='nav-link'>About us</Link></b>

                </li>
                <li className='nav-item'>
                    <b><Link to = "/signin" className='nav-link'>Signin</Link></b>

                </li>
                <li className='nav-item'>
                    <b><Link to = "/signup" className='nav-link'>Signup</Link></b>

                </li>
                </ul>
           
        </div>
        </nav>
  )
}

export default Navbar
