import React from 'react';
import './Cart.css';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux'
import { FaWindowClose } from "react-icons/fa";
import CartPriceDet from './CartPriceDet';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import { updateFoodItems } from '../../Redux/foodItemsSlice';

function Cart() {
  const addedItems = useSelector((state) => state.foodVarieties.foodItems);
  const dispatch=useDispatch();

  const handleRemove=(index)=>{
    const updatedCart=[...addedItems].splice(index,1);
    dispatch(updateFoodItems(updatedCart))
  }
  return (
    <div className='container'>
      {
        addedItems.length>0?<div className='mt-5'>
        <Table responsive>
          <thead>
            <tr>
              <th>Items</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {
              addedItems.map((item,index) => {
                
                return <tr>
                  <td><img src={item.image} className='cart-img' /></td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price * item.quantity}</td>
                  <td><FaWindowClose color='red' className='cart-remove' onClick={()=>handleRemove(index)}/></td>
                </tr>
              })
            }
  
          </tbody>
        </Table>
        <Row className='mt-5'>
          <Col sm={6} >
          <CartPriceDet/>
        <Link to='/order'><Button className='cart-btn mt-4'>Proceed to checkout</Button></Link>
          </Col>
          </Row>      
      </div>:
      <div className='text-center empty-cart'>
        Your Cart is Empty! Please add food...
      </div>
      }
    </div>
    
  )
}

export default Cart
