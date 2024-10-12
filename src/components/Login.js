import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { BODY_LOGO, USER_AVATAR } from '../utils/constants'

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
   const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    // Check for valid form data
    const message = checkValidData(email?.current?.value, password?.current?.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignIn) {
      // Sign up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
        
          // Update user profile after sign up
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR
          }).then(() => {
            const {uid, email, displayName, photoURL} = auth.currentUser;
        dispatch(addUser({
          uid: uid, 
          email: email, 
          displayName: displayName, 
          photoURL: photoURL
        }) );
            // Profile updated!
            console.log(name.current.value);
          }).catch((error) => {
            console.error("Error updating profile:", error);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}: ${errorMessage}`);
        });
    } else {
      // Sign in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User signed in:", user);
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}: ${errorMessage}`);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src={BODY_LOGO}
          alt="Netflix promotion"
        />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className='absolute w-4/12 p-12 my-36 bg-black text-white mx-auto right-0 left-0 bg-opacity-80'>
        <h1 className='font-bold text-3xl'>{isSignIn ? "Sign In" : "Sign Up"}</h1>

        {!isSignIn && (
          <input ref={name} type='text' placeholder='Full Name' className='m-2 p-3 bg-inherit rounded-md w-full' />
        )}
        <input ref={email} type='text' placeholder='Email or mobile number' className='m-2 p-3 bg-inherit rounded-md w-full' />
        <input ref={password} type='password' placeholder='Password' className='m-2 p-3 bg-inherit rounded-md w-full' />
        <p className='text-white-700 font-bold'>{errorMessage}</p>
        <button className='m-2 p-3 bg-red-600 rounded-lg w-full' onClick={handleButtonClick}>{isSignIn ? "Sign In" : "Sign Up"}</button>

        {isSignIn && (
          <>
            <p className='text-center'>OR</p>
            <button className='m-2 p-3 bg-gray-700 rounded-lg w-full'>Use a Sign-in code </button>
          </>
        )}

        <p className='text-center'>Forget password?</p>
        <input type="checkbox" className='m-6 mx-4 size-4' />
        <label> Remember me</label>
        <p className='py-2 px-2 cursor-pointer' onClick={toggleSignInForm}>{isSignIn ? "Already a User? Sign In Now" : "New to Netflix? Sign Up now"}</p>
      </form>
    </div>
  )
}

export default Login;
