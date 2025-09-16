import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/navbar.css';

const Navbar = ({ size, setShow }) => {
   const handleLogoClick = () => {
    setShow(true); // This will show the Shop component (homepage)
  }

  const handleCartClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setShow(false);
  }

  return (
      <nav>
       <div className='nav-box' onClick={handleLogoClick} style={{cursor: 'pointer'}}>
        <span>
           Junk Food Shop
        </span>
        <div className='cart' onClick={handleCartClick} >
          <span>
            <i className="fa-solid fa-cart-plus"></i>
          </span>
          <span className='cart-count'>{size}</span>
        </div>

       </div>
      </nav>
  )
}


export default Navbar
