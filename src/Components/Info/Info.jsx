import React from 'react'
import './Info.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FoodImg from '../../Assets/header_img.png'

function Info() {
  return (
<Card className='card-info mt-5'>
      <Card.Img src={FoodImg} alt="Food image" />
      <Card.ImgOverlay className='d-flex flex-column align-items-start justify-content-end'>
        <Card.Title className='text-light'>Order your favourite food...</Card.Title>
        <Card.Text className='text-light mobile-view'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae voluptas optio assumenda delectus error iste recusandae dolores, repellat.
        </Card.Text>
        <Button variant='light' href='#menu'>View Menu</Button>
      </Card.ImgOverlay>
    </Card>
  )
}

export default Info
