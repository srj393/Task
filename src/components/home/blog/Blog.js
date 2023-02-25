import Card from 'react-bootstrap/Card';
import img1 from '../../../assets/img/blog2-1110x700.jpg'
import img2 from '../../../assets/img/blog3-1110x700.jpg'
import img3 from '../../../assets/img/blog4-1110x700.jpg'
import './blog.css'

function Blog() {
  return (
    <div className='blog'>
          <h1>From our blog</h1>
             
        <div className='blog_card'>  
           
    <Card style={{ margin:'10px'  }}>
      <div className='blog_cardImg'>
      <Card.Img variant="top" src={img1} style={{width:'300px',height:'200px'}}/>
      </div>
      <div>
        <h3>Quisquw Egestas</h3>
      </div>
      
     
    </Card>
    
    <Card style={{  margin:'10px' }}>
     
    <div className='blog_cardImg'>
      <Card.Img variant="top" src={img2} style={{width:'300px',height:'200px'}}/>
      </div>
      <div>
        <h3>Post with Gallery</h3>
      </div>
     
    </Card>

    <Card style={{ margin:'10px' }}>
     
    <div className='blog_cardImg'>
      <Card.Img variant="top" src={img3} style={{width:'300px',height:'200px'}}/>
      </div>
      <div >
        <h3>Maecenas Ultricies</h3>
      </div>
    </Card>

    </div>
    </div>
  );
}

export default Blog;