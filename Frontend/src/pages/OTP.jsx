import React,{useState} from 'react'
import { useNavigate } from 'react-router';
const OTP = ({recdOTP}) => {
    const navigate=useNavigate();
    const [enteredOTP,setEnteredOTP]=useState('');

    const handleClick=()=>{
        if(parseInt(enteredOTP)==parseInt(recdOTP)){
            setEnteredOTP('');
            navigate('/success');
        } else{
            setEnteredOTP('');
            navigate('/failure')
        }
    }
  return (
    <div>
        <input type='text' onChange={(e)=>{setEnteredOTP(e.target.value)}} value={enteredOTP} placeholder='Enter your otp' />
        <button onClick={handleClick}>Verify</button>
    </div>
  )
}

export default OTP