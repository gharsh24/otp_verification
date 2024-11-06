import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';

const LoginForm = ({setrecdOTP}) => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [inputOTP,setinputOTP]=useState('');
    const navigate=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await axios.post('http://localhost:5000/verify', { email, password });
          console.log('Response:', response.data);
          setrecdOTP(response.data.otp);

          navigate('/verify-otp')
        } catch (error) {
          console.error('Error:', error.response ? error.response.data : error.message);
        }
        finally{
            setEmail('');
            setPassword('');
        }
        
    };

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Enter your email</label>
        <input type='email' onChange={(e)=>{setEmail(e.target.value)}} id='email' value={email}/>

        <label htmlFor="password">Enter your password</label>
        <input type='password' id='password' onChange={(e)=>{setPassword(e.target.value)}} value={password} />

        <button>Submit</button>
    </form>
  )
}

export default LoginForm