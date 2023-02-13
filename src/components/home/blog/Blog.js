import Card from 'react-bootstrap/Card';
import img1 from '../../../assets/img/4.jpg'
import './blog.css'

function Blog() {
  return (
    <div className='blog'>
          <h1>From our blog</h1>
             
        <div className='blog_card'>  
           
    <Card style={{ width: '18rem' }}>
      <div className='blog_cardImg'>
      <Card.Img variant="top" src={img1} style={{width:'250px',height:'257px'}}/>
      </div>
      <div>
        <h3>Quisquw Egestas</h3>
      </div>
      
     
    </Card>
    
    <Card style={{ width: '18rem' }}>
     
    <div className='blog_cardImg'>
      <Card.Img variant="top" src={img1} style={{width:'250px',height:'257px'}}/>
      </div>
      <div>
        <h3>Post with Gallery</h3>
      </div>
     
    </Card>

    <Card style={{ width: '18rem' }}>
     
    <div className='blog_cardImg'>
      <Card.Img variant="top" src={img1} style={{width:'250px',height:'257px'}}/>
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