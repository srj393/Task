// import React from 'react';
// import {Carousel} from 'react-responsive-carousel';
// import img1 from "../../../assets/img/slideshow1.jpg";


// // import SimpleImageSlider from "react-simple-image-slider";

// const Slider = () => {
// //    const images = [

// //        { url: "images/slideshow1.jpg" },
// //         { url: "images/slideshow1-2.jpg" },
// //         { url: "images/44.jpg" },
// //  ];
//   return (
//     <div>
//   <Carousel
//      infiniteLoop
//      autoPlay showStatus={false} 
//      interval={5000} showThumbs={false}
//      >
//         <div>
//             <img src={img1} alt="Item1" style={{width:'100%',height:'500px'}}/>
      
        
//         </div>
   
//         {/* <div>
//             <img src={img2} alt="Item2" style={{width:'100%',height:'500px'}} />
           
        
//         </div> 
//         <div>
//             <img src={img3} alt="Item3" style={{width:'100%',height:'500px'}} />
             
          
           
        
//         </div>    */}

//         <div>
       
//         </div>
//     </Carousel>

// {/* <SimpleImageSlider

//         width={'100%'}
//         height={'500px'}
//         images={images}
//         showBullets={true}
//         showNavs={true}
//         autoPlay={true}
       


       
//       /> */}
    
     

// </div>
//   )
// }

// export default Slider




import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
 import img1 from '../../../assets/img/slideshow1-2.jpg';
 import img2 from '../../../assets/img/slideshow1.jpg'
import img3 from '../../../assets/img/44.jpg'
import './slider.css'



const Slider = () => {
  return (
   
        <div>
    <Carousel
     infiniteLoop
     autoPlay showStatus={false} showArrows={true}
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