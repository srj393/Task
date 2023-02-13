import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
 import img1 from '../../../assets/img/1.jpg';
 import img2 from '../../../assets/img/2.jpg'
import img3 from '../../../assets/img/3.jpg'



const Slider = () => {
  return (
    <div>
    <Carousel
     infiniteLoop
     autoPlay showStatus={false} showArrows={false}
     interval={1000} showThumbs={false}
     >
        <div>
            <img src={img1} alt="Item1" style={{width:'100%',height:'500px'}}/>
      
        
        </div>
   
        <div>
            <img src={img2} alt="Item2" style={{width:'100%',height:'500px'}} />
           
        
        </div> 
        <div>
            <img src={img3} alt="Item3" style={{width:'100%',height:'500px'}} />
             
          
           
        
        </div>   

        <div>
       
        </div>
    </Carousel>

</div>
  )
}

export default Slider