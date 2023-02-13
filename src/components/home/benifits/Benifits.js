import React from 'react'
import Card from 'react-bootstrap/Card';
import './benifits.css';
import { SlPlane } from 'react-icons/sl';
import { GrSupport } from 'react-icons/gr';
import { BsCreditCard2Front } from 'react-icons/bs';
import { HiArrowUturnLeft } from 'react-icons/hi2';

const Benifits = () => {
    return (
        <div className='benifits'>
            <div className='benifits_shipping'>
                <div style={{marginRight:'5px', color:'brown'}}>
                    <SlPlane />
                </div>
                <div className=''>
                    <Card style={{ width: '18rem', border: 'none' }}>
                        <Card.Body>
                            <Card.Title>Free Shipping</Card.Title>
                            <Card.Text>
                            Free Shipping On All US Order Or Order Above $200
                            </Card.Text>

                        </Card.Body>
                    </Card>


                </div>
            </div>

            <div className='benifits_Support '>
                <div style={{marginRight:'5px' , color:'brown'}}>
                <GrSupport />
                </div>
                <div className=''>
                    <Card style={{ width: '18rem', border: 'none' }}>
                        <Card.Body>
                            <Card.Title>Support 24/7</Card.Title>
                            <Card.Text>
                            Contact Us 24 Hours A Day, 7 Days A Week
                            </Card.Text>

                        </Card.Body>
                    </Card>


                </div>
            </div>


            
            <div className='benifits_return'>
                <div style={{marginRight:'5px' , color:'brown'}}>
                    <HiArrowUturnLeft />
                </div>
                <div className=''>
                    <Card style={{ width: '18rem', border: 'none' }}>
                        <Card.Body>
                            <Card.Title>30 Days Return</Card.Title>
                            <Card.Text>
                            Simply Return It Within 30 Days For An Exchange
                            </Card.Text>

                        </Card.Body>
                    </Card>


                </div>
            </div>




            
            <div className='benifits_payment'>
                <div style={{marginRight:'5px' , color:'brown'}}>
                    <BsCreditCard2Front />
                </div>
                <div className=''>
                    <Card style={{ width: '18rem', border: 'none' }}>
                        <Card.Body>
                            <Card.Title>100% Payment Secure</Card.Title>
                            <Card.Text>
                            We Ensure Secure Payment With PEV
                            </Card.Text>

                        </Card.Body>
                    </Card>


                </div>
            </div>
  {/*
    <Card style={{ width: '18rem',border:'none' }}>
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
        </Card.Text>
    
        </Card.Body>
    </Card>

    <Card style={{ width: '18rem',border:'none' }}>
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
        </Card.Text>
    
        </Card.Body>
    </Card> */}
        </div>
    )
}

export default Benifits