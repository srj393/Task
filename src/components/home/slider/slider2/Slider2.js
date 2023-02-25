import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './slider2.css'

function Slider2() {
  return (
    <div className='vertical_slider'>
    <Carousel
                   axis='vertical'
                    infiniteLoop
                    autoPlay showStatus={false}
                    interval={1000} showThumbs={false}
                    showIndicators={false}
                    showArrows={false}
                    
                >
                    <div>
                  <h1  style={{width:'100%',height:'500px'}}>hiiii</h1>
                    </div>
    
                    <div>
                        <h1>hii</h1>
                    </div>
                </Carousel>
         </div>
    
  )
}

export default Slider2