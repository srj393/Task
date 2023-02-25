import React from 'react'

import { Carousel } from 'react-responsive-carousel';

import './testimonial.css'
import img1 from "../../../assets/img/testimonial3.jpg";
import img2 from "../../../assets/img/testimonial1.jpg";
import testimonial from '../../../assets/img/testimonial.jpg'

const Testimonial = () => {
    return (

        <div className='testimonial'
            style={{
                backgroundImage: `url(${testimonial})`,

                backgroundSize: 'cover',

                height: '500px',



            }}>
            <div className='testimonial_head' >
                <h1 style={{ paddingTop: '30px' }} >Client Testimonials</h1>
                <p>What they say</p>
            </div>
            <Carousel
                infiniteLoop
                autoPlay showStatus={false}
                interval={1000} showThumbs={false}
            >
                <div className='testimonial_img'
                    style={{ textAlign: 'center' }}
                >
                    <img src={img1} alt="Item1" />
                    <p style={{ color: 'black', width: '70%', marginLeft: '18%' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>

                </div>
                <div className='testimonial_img'
                >
                    <img src={img2} alt="Item1" />
                    <p style={{ color: 'black', width: '70%', marginLeft: '18%' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>


                </div>
            </Carousel>


           

        </div>


    )
}

export default Testimonial






