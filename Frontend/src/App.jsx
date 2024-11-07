import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import LoginForm from './pages/LoginForm'
import OTP from '@/pages/OTP'
import Success from '@/pages/Success'
import Failure from '@/pages/Failure'
import Register from '@/pages/Register'
function App() {
  const [recdOTP,setrecdOTP]=useState('');
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginForm setrecdOTP={setrecdOTP}/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/verify-otp' element={<OTP recdOTP={recdOTP} />} />
        <Route path='/success' element={<Success />} />
        <Route path='/failure' element={<Failure/>} />
      </Routes>
    </>
  )
}

export default App
