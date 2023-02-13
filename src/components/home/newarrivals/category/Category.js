import React from 'react'
import background1 from '../../../../assets/img/1.jpg'
import background2 from '../../../../assets/img/2.jpg'

import "./category.css"

const Category = () => {
  return (

    <div className='category'>
    <div className='cardsss' style={{backgroundImage: `url(${background1})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
                
    }}>
     Ring
    </div>



    <div className='cardsss' style={{backgroundImage: `url(${background2})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
                
    }}>
      Earrings
    </div>

    <div className='cardsss' style={{backgroundImage: `url(${background2})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
                
    }}>
     Bracelets
    </div>


    <div className='cardsss' style={{backgroundImage: `url(${background1})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
                
    }}>
      nackles
    </div>

    </div>

    
   
  )
}

export default Category