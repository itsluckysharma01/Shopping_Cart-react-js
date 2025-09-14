import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/navbar.css';

const Navbar = () => {
  return (
      <nav>
       <div className='nav-box'>
        <span>
           Junk Food Shop
        </span>
        <div className='cart'>
          <span>
            <i className="fa-solid fa-cart-plus"></i>
          </span>
          <span className='cart-count'>0</span>
        </div>

       </div>
      </nav>
  )
}


export default Navbar
