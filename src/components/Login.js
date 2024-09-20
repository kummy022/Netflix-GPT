import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm =()=>{
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img
           src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg"
                  alt="Netflix promotion"
      />
      </div>

      <form className='absolute w-4/12 p-12 my-36 bg-black text-white mx-auto right-0 left-0  bg-opacity-80'>
      <h1 className='font-bold text-3xl'>{isSignIn ? "Sign In" : "Sign Up"}</h1>

        {!isSignIn &&(
          <input type='text' placeholder='Full Name' className='m-2 p-3 bg-inherit rounded-md  w-full' />

        )}
        <input type='text' placeholder='Email or mobile number' className='m-2 p-3 bg-inherit rounded-md  w-full' />
        <input type='text' placeholder='Password' className='m-2  p-3 bg-inherit rounded-md w-full' />
        <button className='m-2 p-3 bg-red-600 rounded-lg w-full'>{isSignIn ? "Sign In" : "Sign Up"}</button>
       


          {isSignIn && (
            <>
              <p  className='text-center'>OR</p>
              <button className='m-2 p-3 bg-gray-700 rounded-lg w-full'>Use a Sign-in code </button>
            </>
          )}
        
        
        <p className='text-center'>Forget password?</p>
        <input type="checkbox" className='m-6 mx-4 size-4' />
        <label> Remember me</label>
        <p className='py-2 px-2 cursor-pointer' onClick={toggleSignInForm}>{isSignIn ? "Already s User Sign In Now" : "New to Netflix? Sign Up now"} </p>
        

      </form>  
    </div>

      
  )
}

export default Login
