import React, { useState } from 'react'
import {AiOutlineHeart} from 'react-icons/ai';
import {IoIosGitCompare} from 'react-icons/io'
import {CiSearch} from 'react-icons/ci'

import './product.css'


const Product = (props) => {
 
    const [style, setStyle] = useState({ display: 'none' });

    return (
  
      <div className='newarrival'
        onMouseEnter={e => {
          setStyle({ display: '' });
        }}
        onMouseLeave={e => {
          setStyle({ display: 'none' })
        }}>
  
  
  
        <div className="newarrival_card">
          {props.openSpots === 0 && <div className="newarrival_cardBadge"> Sale! </div>}
          <button className='newarrival_cardButton' style={style}>  Add to cart  </button>
          <div className='newarrival_cardOperations' style={style}>
         <div className='AiOutlineHeart' style={{margin:'10px',padding:'10px' , borderRadius:'55px'}}><AiOutlineHeart style={{fontSize:'20px'}} /></div>
         <div className='IoIosGitCompare' style={{margin:'10px' ,padding:'10px' , borderRadius:'55px'}}><IoIosGitCompare style={{fontSize:'20px'}} /></div>
         <div className='CiSearch' style={{margin:'10px',padding:'10px', borderRadius:'55px'}}><CiSearch style={{fontSize:'20px'}} /></div>
          </div>
         
          <img src={`./images/${props.img}`} className="card--image" />
  
          <p className="card--title">{props.title}</p>
          <p className="card--price"><span className="bold"> ${props.price}</span> </p>
  
  
  
  
  
  
        </div>
  
  
  
      </div>
  
    )
  }
  
  export default Product