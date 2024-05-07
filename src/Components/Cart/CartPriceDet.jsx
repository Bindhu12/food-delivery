import React from 'react';
import './Cart.css';
import { useSelector } from 'react-redux';


function CartPriceDet() {
    const foodPrice = useSelector(state => state.foodVarieties.totalPrice);
    const deliveryFee = 5;
    return (
        <div>
            <h4>Card Total</h4>
            <div className='d-flex justify-content-between mb-0 mt-3'>
                <p>Subtotal</p>
                <p>${foodPrice}</p>
            </div>
            <hr className='mt-0 mb-1' />
            <div className='d-flex justify-content-between'>
                <p>Delivery Fee</p>
                <p>${deliveryFee}</p>
            </div>
            <hr className='mt-0 mb-1' />
            <div className='d-flex justify-content-between'>
                <p>Total</p>
                <p>${foodPrice + deliveryFee}</p>
            </div>
            <hr className='mt-0 mb-1' />
        </div>

    )
}

export default CartPriceDet
