import React from 'react';
import './DeliveryInfo.css';
import '../Cart/Cart.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CartPriceDet from '../Cart/CartPriceDet';

function DeliveryInfo() {
    return (
        <div className="container">
            <Row className='mt-5'>
                <Col sm={6} >
                    <h4>Delivery Information</h4>
                    <Form className="mt-3">
                        <Row >
                            <Col sm={6} className="mb-3">
                                <Form.Control type="text" placeholder="First name" />
                            </Col>
                            <Col sm={6} className="mb-3">
                                <Form.Control type="text" placeholder="Last name" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Control type="email" placeholder="Email address" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Control type="text" placeholder="Address Line 1" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col sm={6} className="mb-3">
                                <Form.Control type="text" placeholder="City" />
                            </Col>
                            <Col sm={6} className="mb-3">
                                <Form.Control type="text" placeholder="State" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col sm={6} className="mb-3">
                                <Form.Control type="text" placeholder="Pin Code" />
                            </Col>
                            <Col sm={6} className="mb-3">
                                <Form.Control type="text" placeholder="Country" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col sm={6} >
                                <Form.Control type="text" placeholder="Phone" />
                            </Col>
                        </Row>

                    </Form>

                </Col>
                <Col sm={{ span: 4, offset: 2 }} >
                    <CartPriceDet/>
                    <Button className='cart-btn mt-4'>Proceed to checkout</Button>
                </Col>
            </Row>
        </div>

    )
}

export default DeliveryInfo
