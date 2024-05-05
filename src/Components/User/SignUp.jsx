import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch } from 'react-redux';
import { updateUserDet } from '../../Redux/userSlice';

function SignUp({setIsUser, setShowModal}) {
    const [email, setEmail]=useState('');
    const [name, setName]=useState('');
    const [emailErr, setEmailErr]=useState('');
    const [nameErr, setNameErr]=useState('');
    const [password, setPassword]=useState('');
    const [passwordErr, setPasswordErr]=useState('');

    const dispatch=useDispatch();

    const validateName=()=>{
        if(!name) {
            setNameErr('Enter a name')
            return false;
        }
        const nameRegex=/^[A-Za-z ]+$/;
        const isvalidName= nameRegex.test(name)
        if(isvalidName){
            setNameErr('')
            return true
        }
        setNameErr('Enter a valid name');
        return false;
    }

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

    const handleCreateAccount=()=>{
        const isValidName=validateName();
        const isValidEmail=validateEmail();
        const isValidPassword=validatePassword();
        if(isValidName && isValidEmail && isValidPassword){
            setShowModal(false);
            dispatch(updateUserDet(true))
        } 
    }
    
    return (
        <div>
            <Form>
                <FloatingLabel
                    controlId="name"
                    label="Your name"
                    className="mb-1"
                >
                    <Form.Control 
                    type="text" 
                    placeholder="name" 
                    value={name}
                    onChange={(event)=>setName(event.target.value)}
                    />
                </FloatingLabel>
                <p className='text-danger'>{nameErr}</p>
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
                    onChange={(event)=>setPassword(event.target.value)}/>
                </FloatingLabel>
                <p className='text-danger'>{passwordErr}</p>
                <Button style={{ backgroundColor: 'tomato', border: 'none' }} onClick={handleCreateAccount}>Create Account</Button>
                <Form.Check className='mt-3 mb-4' type='checkbox' label='I agree to the forms of use & privacy policy' />
            </Form>
            <p>Already have an account?<Button variant="link"onClick={()=>setIsUser(true)}>Login here</Button></p>
        </div>
    )
}

export default SignUp
