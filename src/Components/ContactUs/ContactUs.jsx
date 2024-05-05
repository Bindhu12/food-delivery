import React from 'react';
import './ContactUs.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaPhoneAlt, FaMailBulk, FaGlobe } from "react-icons/fa";


function ContactUs() {
    return (
        <div className='container'>
            <CardGroup className='mt-5'>
                <Card className='' >
                    <Card.Header className='title-col'>
                        <Card.Title className='text-center text-light'>Send us a message</Card.Title>
                    </Card.Header>

                    <Card.Body>
                        <Form>
                            <Form.Control type="text" className="mb-3" placeholder="Name" />
                            <Form.Control type="email" className="mb-3" placeholder="Email" />
                            <Form.Control as="textarea" rows={4} placeholder='Message' />
                            <Button className='btn-col mt-5'>Send message</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <Card>
                    <div className='ms-4'>
                        <h5 className='mt-3 mb-5'>Contact Us</h5>
                        <div className='d-flex gap-1'>
                            <FaPhoneAlt />
                            <p style={{fontWeight:'bold'}}>Phone:</p>&nbsp;
                            <p> +91 9876543210</p>
                        </div>
                        <div className='d-flex gap-1' >
                            <FaMailBulk />
                            <p style={{fontWeight:'bold'}}>Email:</p>&nbsp;
                            <p> hungrybasket@gmail.com</p>
                        </div>
                        <div className='d-flex gap-1'>
                            <FaGlobe />
                            <p style={{fontWeight:'bold'}}>Website:</p>&nbsp;
                            <p>hungrybasket.com</p>
                        </div>

                    </div>
                </Card>
            </CardGroup>
        </div>

    )
}

export default ContactUs
