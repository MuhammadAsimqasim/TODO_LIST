import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';


function LoginForm() {
  const navigate = useNavigate();


  return   <div className='loginscreen'>

<form>
        <h1>Login</h1>
        <input placeholder='Email ' type="email" />
        <input  placeholder='Password' type="Password" />
        <button type='submit'>Login</button>
        <h4><span className='loginscreen_gray'>Please First? </span>
        <span className='loginscreen_link' onClick={() => navigate("/sign-up")}>
   
          Sign Up Now</span>
        </h4>
    </form>


    </div>;
  
}

export default LoginForm
