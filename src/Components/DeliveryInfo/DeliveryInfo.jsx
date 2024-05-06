import React, { useState } from 'react';
import './DeliveryInfo.css';
import '../Cart/Cart.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CartPriceDet from '../Cart/CartPriceDet';
import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import { useSelector } from 'react-redux';
import { FaCheckCircle } from "react-icons/fa";

function DeliveryInfo() {
    const foodPrice = useSelector(state => state.foodVarieties.totalPrice);
    const [orderFlag, setOrderFlag]=useState(false);
    const [orderId, setOrderId]=useState('');
    const [Razorpay] = useRazorpay();

  const handlePayment = useCallback(() => {
    const options = {
      key: "rzp_test_7dmBwT8FpD5EfV",
      key_secret:"GhONc5OJ9JgyBPedBnplD0FY",
      amount: (foodPrice+5) * 100,
      currency: "INR",
      name: "Hungry Basket",
      description: "for testing purpose",
      handler: (res) => {
        console.log(res);
        setOrderFlag(true);
        setOrderId(res.razorpay_payment_id);
      },
      prefill: {
        name: "Arul Bindhu S",
        email: "arulbindhus@gmail.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

    return (
        <div className="container">
            {
                !orderFlag?<Row className='mt-5'>
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
                    <Button className='cart-btn mt-4' onClick={handlePayment}>Proceed to checkout</Button>
                </Col>
            </Row>:
            <div className='text-center mt-5 mb-5'>
                <h1 className='mb-4'>Order Placed</h1>
                <FaCheckCircle color='green'style={{fontSize:'3rem'}}/>
                <p>Your order id: {orderId}</p>
                <h1>Thank you! </h1>
            </div>
            }
        </div>

    )
}

export default DeliveryInfo
