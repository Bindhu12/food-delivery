import React, { useState } from 'react';
import './User.css';
import Modal from 'react-bootstrap/Modal';
import SignUp from './SignUp';
import SignIn from './SignIn';

function User({ show, setShowModal }) {
    const [isUser, setIsUser]=useState(true);
    return (
        <Modal  show={show} size='md' onHide={() => setShowModal(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>{isUser?'Login':'Sign Up'}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='p-4'>
                {
                    isUser?
                    <SignIn setIsUser={setIsUser} setShowModal={setShowModal}/> :
                    <SignUp setIsUser={setIsUser} setShowModal={setShowModal}/>
                } 
            </Modal.Body>
        </Modal>
    )
}

export default User
