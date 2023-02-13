import React from 'react'
import './navbar2.css'
import { Link } from 'react-router-dom';
import {HashLink} from "react-router-hash-link" 
import { MdAccountCircle  } from 'react-icons/md';
import {  AiOutlineHeart } from 'react-icons/ai';
import {  IoBagHandleOutline } from 'react-icons/io5';
import {  AiOutlineSearch } from 'react-icons/ai';



const NavBar2 = () => {
  return (
    <div className='nav2'>
        <div className='nav2_logo'>
          <h3>Corano</h3>
        </div>
      
        
          <div className='nav2_Links'>
          <HashLink to={"/#home"}><b> Home </b></HashLink>
            <Link to={"/shop"}><b>Shop</b></Link>
            <Link to={"/blog"}><b>Blog</b></Link>
            <Link to={"/pages"}><b>Pages</b></Link>
            <Link to={"contact"}><b>Contact</b></Link>
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