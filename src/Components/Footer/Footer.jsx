import React from 'react';
import './Footer.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook, FaInstagram , FaTwitter} from "react-icons/fa";

function Footer() {
    return (
        <div className='container-fluid bg-dark text-light p-5 mt-5 footer-position'>
            <Row>
                <Col sm={5} className='mobile-view-footer'>
                    <h4 className='fooder-title mb-3'>Hungry Basket</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis excepturi repellat voluptatem voluptatibus, iure recusandae molestias? Labore quas suscipit atque, adipisci dolorum laudantium officia delectus tempora illum, pariatur ratione! Aliquam.</p>
                <div className='d-flex gap-3'>
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaTwitter/>
                </div>
                </Col>
                <Col sm={{ span: 3, offset: 1 }} className='mobile-view-footer'>
                    <h6 className='mb-3'>COMPANY</h6>
                    <div>
                        <p className='mb-1'>Home</p>
                        <p className='mb-1'>About us</p>
                        <p className='mb-1'>Delivery</p>
                        <p>Privacy policy</p>
                    </div>

                </Col>
                <Col sm={3} className='mobile-view-footer'>
                <h6 className='mb-3'>GET IN TOUCH</h6>
                        <p className='mb-1'>+91 9876543210</p>
                        <p>abc@gmail.com</p>
                </Col>
            </Row>


        </div>
    )
}

export default Footer
