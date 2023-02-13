import React from 'react'
import './navbar1.css'
import { Link } from 'react-router-dom';




const NavBar1 = () => {
  return (
    <div className='nav'>
        <div className='nav_left'>
          <p>Free Shipping For All Products</p>
        </div>
        <div className='nav_right'>
        
          <div className='nav_rightLinks'>
            <Link to={"/myacc"}><b>My Account</b></Link>
            <Link to={"/cart"}><b>Cart</b></Link>
            <Link to={"/wishlist"}><b>Wishlist</b></Link>
            <Link to={"/checkout"}><b>Checkout</b></Link>
          </div>
        </div>
        
    </div>
  )
}

export default NavBar1