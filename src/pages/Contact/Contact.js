import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import "./Contact.css"
function Contact() {
  return (
    <div>
            <div className='school_contact'>
                <Container>
                    <Row className='container_wrapper'>
                        <Col data-aos="fade-up" data-aos-duration="500" xs={12} lg={6} md={6} sm={6}>
                            <img className='contact_girl' src="https://i.postimg.cc/Xv3JzvbC/microsoft-365-b-WL-c09-Ys80-unsplash.jpg"></img>
                        </Col>
                        <Col data-aos="fade-down" data-aos-duration="500" xs={12} lg={6} md={6} sm={6}>
                            <h3 className='form_heading'>Send Message</h3>
                            <Row className='form_heading'>
                                <Col>
                                    <Form.Label htmlFor="inputPassword5">Name</Form.Label>
                                    <Form.Control
                                        
                                        name='fname'
                                        type="text"
                                        id="inputPassword5"
                                        aria-describedby="passwordHelpBlock"
                                    />
                                </Col>
                                <Col>
                                    <Form.Label htmlFor="inputPassword5">Email</Form.Label>
                                    <Form.Control
                                       
                                        name='email'
                                        type="email"
                                        id="inputPassword5"
                                        aria-describedby="passwordHelpBlock"
                                    /></Col>
                            </Row>
                            <div className='form_heading'>
                                <Form.Label htmlFor="inputPassword5">Phone number</Form.Label>
                                <Form.Control
                                    
                                    name='phonenumber'
                                    type="number"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                />
                            </div>
                            <div className='form_heading'>
                                <Form.Label htmlFor="inputPassword5">Message</Form.Label>
                                <Form.Control
                                    
                                    name='message'
                                    type="text"
                                    as="textarea"
                                    rows={5}

                                />
                            </div>
                            <Button variant="success"  className='mb-4'>Send</Button>
                        </Col>
                    </Row>
                </Container>
                <div>
                    <Container>
                        <Row className='contact__wrapper' >
                            
                            <Col>
                                <div className='contactus__adress_style'>
                                    <h1 className='mb-3 contact__style'>Contact Us</h1>
                                    <h4 className='contact__subheading'>Kasro Electronics</h4>

                                    <h5>Toronto,ontario,Canada</h5>
                                    <p className='email__style'> Phone:  +41 125487963,Email: kasro98@gmail.com</p>

                                </div>

                            </Col>
                        </Row>
                    </Container>


                </div>
            </div>
        </div>
  )
}

export default Contact