import React from 'react'
import Benifits from './benifits/Benifits'

import NavBar1 from './navbar1/NavBar1'
import NavBar2 from './navbar2/NavBar2'
import NewArrivals from './newarrivals/NewArrivals'
import Slider from './slider/Slider'
import data from '../../assets/data/data'
import Category from './newarrivals/category/Category'

import Testimonial from './testimonial/Testimonial'
import Blog from './blog/Blog'
import Footers from './footer/Footers'
import Brand from './brands/Brands'
import Product from './products/Product'
import Slider2 from './slider/slider2/Slider2'




const Home = () => {
  const cards = data.map(item => {
    return (
      <>
        <NewArrivals
            key={item.id}
            img={item.coverImg}
           
            title={item.title}
            price={item.price}
            openSpots={item.openSpots}
        />


       

</>
    )
})        


  return (
  <>
  <NavBar1 />
 <div>
  <NavBar2 />
  </div>
 <Slider />  
 {/* <Slider2 /> */}
  <Benifits />
   <div>
    <h1 style={{textAlign:'center'}}>New Arrivals</h1>
  <section style={{  display: 'flex',
   
    flexWrap: 'nowrap',
    // gap: '5px',
    overflowX: 'auto'}}>
                {cards}
  </section>

  <Category />
  
  </div> 




  <div>
    <h1 style={{textAlign:'center'}}>Our Products</h1>
  <section style={{  display: 'flex',
  
   
    flexWrap: 'nowrap',
    // gap: '15px',
    overflowX: 'auto'}}>
                {cards}
  </section>

 
  
  </div> 
 
 <Testimonial /> 
  <Blog />
  <Brand />
  <Footers />


  
  </>
  )
}

export default Home