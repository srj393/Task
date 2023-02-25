import React, { useState } from 'react'

import background1 from '../../../../assets/img/banner1.jpg'
import background2 from '../../../../assets/img/banner2.jpg'
import background3 from '../../../../assets/img/banner3.jpg'
import background4 from '../../../../assets/img/banner4.jpg'

import "./category.css"

const Category = () => {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };


  return (

    <div className='category'>
      <div className='cardsss'
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{
          backgroundImage: `url(${background1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          border:'none'



        }}>
        <div className='cardsss_heading' >
          EARRING

          {isHovering && (
            <div className='cardsss_subheading'>
              15 Items
            </div>
          )}
        </div>



      </div>



      <div className='cardsss'
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{
          backgroundImage: `url(${background2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          border:'none'

        }}>
        <div className='cardsss_heading' >
          NECKLACES

          {isHovering && (
            <div className='cardsss_subheading'>
              15 Items
            </div>
          )}
        </div>



      </div>

      <div className='cardsss'
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{
          backgroundImage: `url(${background3})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          border:'none'

        }}>
        <div className='cardsss_heading' >
          RING

          {isHovering && (
            <div className='cardsss_subheading'>
              15 Items
            </div>
          )}
        </div>



      </div>



      <div className='cardsss'
         onMouseOver={handleMouseOver}
         onMouseOut={handleMouseOut}
         style={{
        backgroundImage: `url(${background4})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        border:'none'

      }}>
       <div className='cardsss_heading' >
         BRACELETS

          {isHovering && (
            <div className='cardsss_subheading'>
              15 Items
            </div>
          )}
        </div>

    </div>
    </div>



  )
}

export default Category