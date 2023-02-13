import React from 'react'
import Benifits from './benifits/Benifits'

import NavBar1 from './navbar1/NavBar1'
import NavBar2 from './navbar2/NavBar2'
import NewArrivals from './newarrivals/NewArrivals'
import Slider from './slider/Slider'
import data from '../../assets/data/data'
import Category from './newarrivals/category/Category'
import Footer from './footer/Footers'
import Testimonial from './testimonial/Testimonial'
import Blog from './blog/Blog'
import Footers from './footer/Footers'
import Brand from './brands/Brands'



const Home = () => {
  const cards = data.map(item => {
    return (
        <NewArrivals
            key={item.id}
            img={item.coverImg}
           
            title={item.title}
            price={item.price}
        />
    )
})        


  return (
  <>
  <NavBar1 />
  <NavBar2 />
 <Slider />  
  <Benifits />
   <div>
    <h1 style={{textAlign:'center'}}>New Arrivals</h1>
  <section style={{  display: 'flex',
    justifyContent:'space-evenly',
    flexWrap: 'nowrap',
    gap: '20px',
    overflowX: 'auto'}}>
                {cards}
  </section>

  <Category />
  
  </div> 
  <Blog />
  <Testimonial />

  <Brand />
  <Footers />


  
  </>
  )
}

export default Home