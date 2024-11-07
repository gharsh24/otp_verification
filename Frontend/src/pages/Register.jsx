import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';

const Register = () => {
    const [userName,setUserName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          console.log({userName,email,password});
          const response = await axios.post('http://localhost:3000/register', { userName,email, password });
          console.log('Response:', response.data); 
        } catch (error) {
          console.error('Error:', error.response ? error.response.data : error.message);
        }
        finally{
            navigate('/');
            setUserName('');
            setEmail('');
            setPassword('');
        }
        
    };

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter your username</label>
        <input type='text' onChange={(e)=>{setUserName(e.target.value)}} id='username' value={userName}/>

        <label htmlFor="email">Enter your email</label>
        <input type='email' onChange={(e)=>{setEmail(e.target.value)}} id='email' value={email}/>

        <label htmlFor="password">Enter your password</label>
        <input type='password' id='password' onChange={(e)=>{setPassword(e.target.value)}} value={password} />

        <button>Register</button>
    </form>
  )
}

export default Register