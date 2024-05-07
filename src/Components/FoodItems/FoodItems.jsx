import React, { useState } from 'react';
import './FoodItems.css';
import { food_list } from '../../Assets/assets';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { updateFoodItems, updateTotalPrice } from '../../Redux/foodItemsSlice';

function FoodItems({ menu }) {
  const [foodItems, setFoodItems] = useState({});
  const [foodDetails, setFoodDetails] =useState([]);
  const [totalCartPrice, settotalPrice]=useState(0)
  const dispatch=useDispatch();

  const calculateTotalPrice=(price)=>{
    const total=totalCartPrice+price;
    settotalPrice(total)
    dispatch(updateTotalPrice(total))
  }

  const handleIconClick = (food) => {
    const updatedFoodDet=[...foodDetails, {...food, quantity:1}]
    calculateTotalPrice(food.price);
    setFoodDetails(updatedFoodDet)

    setFoodItems(prev => ({ ...prev, [food.name]: 1 }))
    dispatch(updateFoodItems(updatedFoodDet))
  }
  const handleAddIconClick = (food) => {  
    const updatedFoodDet=foodDetails.map(item=>{     
      if(item?.id===food?.id){
        const count=item['quantity']+1;
        calculateTotalPrice(food.price);
        return {...item, quantity:count}
      }
      else return {...item}
    })
    setFoodItems(prev => ({ ...prev, [food.name]: foodItems[food.name]+1 }))
    setFoodDetails(updatedFoodDet)
    dispatch(updateFoodItems(updatedFoodDet))
  }
  const handleRemoveIconClick = (food) => {
    let indexVal;
    const updatedFoodDet=foodDetails.map((item, index)=>{
      if(item.id===food.id){
        const count=item['quantity']-1;
        calculateTotalPrice(food.price);
        if(!count) indexVal=Number(index);
        return {...item, quantity:count}
      }
      else return {...item}
    })
    if(indexVal>=0) updatedFoodDet.splice(indexVal,1)
    setFoodItems(prev => ({ ...prev, [food.name]: foodItems[food.name]-1 }))
    setFoodDetails(updatedFoodDet)
    dispatch(updateFoodItems(updatedFoodDet))
  }

  return (
    <Container fluid id='food-display'>
      <Row>
        {
          food_list.map(foodItem => {
            if (menu === 'All' || menu === foodItem.category)
              return (
                <Col sm={4} md={3} className='d-flex'>
                  <Card className='mb-4 '>
                    <Card.Img src={foodItem.image} className='img-size'/>
                    <Card.ImgOverlay className='d-flex  justify-content-end align-items-end'>
                      {
                        foodItems[foodItem.name] ?
                          <div className='d-flex align-items-end gap-2  '>
                            <FaMinusCircle color='rgb(242, 78, 78)' size={20} className='icon' onClick={() => handleRemoveIconClick(foodItem)}/>
                            <p className='mb-0'>{foodItems[foodItem.name]}</p>
                            <FaPlusCircle color='rgb(29, 187, 29)' size={20} className='icon' onClick={() => handleAddIconClick(foodItem)} />
                          </div> :
                          <FaPlusCircle color='rgb(29, 187, 29)' size={20} className='icon' onClick={() => handleIconClick(foodItem)} />
                      }
                    </Card.ImgOverlay>
                    <Card.Body className='p-2'>
                      <h5>{foodItem.name}</h5>
                      <p>{foodItem.description}</p>
                      <Card.Text style={{ color: 'tomato' }}>&#8377;{foodItem.price}</Card.Text>
                    </Card.Body>

                  </Card>
                </Col>
              )
          })
        }
      </Row>
    </Container>

  )
}

export default FoodItems