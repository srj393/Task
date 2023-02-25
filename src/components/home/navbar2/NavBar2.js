import React,{useState} from 'react'
import './navbar2.css'
import { Link } from 'react-router-dom';
import {HashLink} from "react-router-hash-link" 
import { MdAccountCircle  } from 'react-icons/md';
import {  AiOutlineHeart } from 'react-icons/ai';
import {  IoBagHandleOutline } from 'react-icons/io5';
import {  AiOutlineSearch } from 'react-icons/ai';




const NavBar2 = () => {
  const [activeNavItem, setActiveNavItem] = useState(null);

  const handleMouseEnter = (navItem) => {
    setActiveNavItem(navItem);
  };

  const handleMouseLeave = () => {
    setActiveNavItem(null);
  };
  return (
    <div className='nav2'>
        <div className='nav2_logo'>
          <h3>Corano</h3>
        </div>
      
        
          <div className='nav2_Links'>
          <nav className="navbar">
      <ul className="navbar-nav">
        <li
          className={`nav-item${activeNavItem === 'home' ? ' active' : ''}`}
          onMouseEnter={() => handleMouseEnter('home')}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#" className="nav-link">
            Home
            <ul className={`dropdown-menu${activeNavItem === 'home' ? ' show' : ''}`}>
              <li><a href="#">Submenu 1</a></li>
              <li><a href="#">Submenu 2</a></li>
              <li><a href="#">Submenu 3</a></li>
            </ul>
          </a>
        </li>
        <li
          className={`nav-item${activeNavItem === 'about' ? ' active' : ''}`}
          onMouseEnter={() => handleMouseEnter('about')}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#" className="nav-link">
           Shop
            <ul className={`dropdown-menu${activeNavItem === 'about' ? ' show' : ''}`}>
              <li><a href="#">Submenu 1</a></li>
              <li><a href="#">Submenu 2</a></li>
              <li><a href="#">Submenu 3</a></li>
            </ul>
          </a>
        </li>
              
   
    <li
      className={`nav-item${activeNavItem === 'services' ? ' active' : ''}`}
      onMouseEnter={() => handleMouseEnter('services')}
      onMouseLeave={handleMouseLeave}
    >
      <a href="#" className="nav-link">
        Blog
        <ul className={`dropdown-menu${activeNavItem === 'services' ? ' show' : ''}`}>
          <li><a href="#">Submenu 1</a></li>
          <li><a href="#">Submenu 2</a></li>
          <li><a href="#">Submenu 3</a></li>
        </ul>
      </a>
    </li>
    <li
      className={`nav-item${activeNavItem === 'contact' ? ' active' : ''}`}
      onMouseEnter={() => handleMouseEnter('contact')}
      onMouseLeave={handleMouseLeave}
    >
      <a href="#" className="nav-link">
        Pages
        <ul className={`dropdown-menu${activeNavItem === 'contact' ? ' show' : ''}`}>
          <li><a href="#">Submenu 1</a></li>
          <li><a href="#">Submenu 2</a></li>
          <li><a href="#">Submenu 3</a></li>
        </ul>
      </a>
    </li>



    <li
     
    >
      <a href="#" className="nav-link">
        Contact
       
      </a>
    </li>



  </ul>
</nav>
          </div>

          <div className='nav2_searchbar'>
            <input type='text'
            style={{borderRadius:'10px'}}
            placeholder='search product'></input>
          </div>

          <div className='nav2_right'>
            <Link to={"/myacc"}><b><MdAccountCircle /></b></Link>
            <Link to={"/cart"}><b><AiOutlineHeart /></b></Link>
            <Link to={"/wishlist"}><b><IoBagHandleOutline /></b></Link>

          </div>
       
        
    </div>
  )
}

export default NavBar2