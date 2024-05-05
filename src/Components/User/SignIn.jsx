import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { updateUserDet } from '../../Redux/userSlice';

function SignIn({setIsUser, setShowModal}) {
    const [email, setEmail]=useState('');
    const [emailErr, setEmailErr]=useState('');
    const [password, setPassword]=useState('');
    const [passwordErr, setPasswordErr]=useState('');

    const dispatch=useDispatch();

    const validateEmail=()=>{
        if(!email) {
            setEmailErr('Enter a email address')
            return false;
        }
        const emailRegex=/^[A-Za-z]+@[A-Za-z]+\.(in|com)$/;
        const isvalidEmail= emailRegex.test(email);
        if(isvalidEmail){
            setEmailErr('');
            return true;
        }
        setEmailErr('Enter a valid email address')
        return false;
    }

    const validatePassword=()=>{
        if(!password) {
            setPasswordErr('Enter a password')
            return false;
        }
        const isValidPassword=(password.length>=8)?true :false;
        if(isValidPassword){
            setPasswordErr('');
            return true;
        }
        setPasswordErr('Enter a valid password')
        return false;
    }

    const handleLoginBtn=()=>{
        const isValidEmail=validateEmail();
        const isvalidPassword=validatePassword();
        if(isValidEmail && isvalidPassword) {
            setShowModal(false);
            dispatch(updateUserDet(true))
        }
    }

    return (
        <div>
            <Form>
                <FloatingLabel
                    controlId="email"
                    label="Email id"
                    className="mb-1"
                >
                    <Form.Control 
                    type="email" 
                    placeholder="email" 
                    value={email}
                    onChange={(event)=>setEmail(event.target.value)}
                    />
                </FloatingLabel>
                <p className='text-danger'>{emailErr}</p>
                <FloatingLabel
                    controlId="password"
                    label="Password"
                    className="mb-1"
                >
                    <Form.Control 
                    type="password" 
                    placeholder="name" 
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                    />
                </FloatingLabel>
                <p className='text-danger'>{passwordErr}</p>
                <Button style={{ backgroundColor: 'tomato', border: 'none' }} onClick={handleLoginBtn}>Login</Button>
                <Form.Check className='mt-3 mb-4' type='checkbox' label='I agree to the forms of use & privacy policy' />
            </Form>
            <p>Create a new account?<Button variant="link"onClick={()=>setIsUser(false)}>Create Account</Button></p>
        </div>
    )
}

export default SignIn
