import React from 'react'
import { IoMagnet } from 'react-icons/io5';
import { Carousel } from 'react-responsive-carousel';
import './testimonial.css'
import img1 from "../../../assets/img/4.jpg";

const Testimonial = () => {
    return (
      
        <div className='testimonial'
            style={{
                backgroundImage: "url(" + "https://images.unsplash.com/photo-1608501078713-8e445a709b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '500px',
            
                

            }}>
                <div className='testimonial_head' >
                <h1 >Client Testimonials</h1>
                <p>What they say</p>
                </div>
            <Carousel
                infiniteLoop
                autoPlay showStatus={false} showArrows={false}
                interval={1000} showThumbs={false}
            >       
                <div className='testimonial_img'
                style={{ }}
                >
                        <img  src={img1} alt="Item1" />
                         <p style={{ }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>

                </div>
                <div className='testimonial_img'
                  >
                      <img  src={img1} alt="Item1" />
                    <p style={{  }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>


                </div>
            </Carousel>
        </div>
       

    )
}

export default Testimonial