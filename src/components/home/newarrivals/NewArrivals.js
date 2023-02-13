import React from 'react'

import './newarrivals.css';


const NewArrivals = (props) => {
  return (
   
    <div className='newarrival'>
       

    
        <div className="newarrival_card">
            <img src={`./images/${props.img}`} className="card--image" />
            
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold"> ${props.price}</span> </p>
        </div>
        
     
       
    </div>

  )
}

export default NewArrivals