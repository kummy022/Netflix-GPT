import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector, useStore } from "react-redux";
import { addUser, removeUser } from '../utils/userSlice'
import React, { useEffect } from 'react'
import { LOGO, USER_AVATAR } from "../utils/constants";


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store => store.user))
  const dispatch = useDispatch();

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      console.error("Error signing out:", error);
      alert("Failed to sign out. Please try again.");
    });
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({
          uid: uid, 
          email: email, 
          displayName: displayName, 
          photoURL: USER_AVATAR
        }) );
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });
    return ()=> unsubscribe();

  },[]
  )
  
  
  return (
    
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44'
        src={LOGO}
        alt='Netflix logo'
      />
      { user &&
      <div>
        
        <button className='m-4 p-2 bg-red-600 rounded-lg text-white'onClick={handleSignOut} >SignOut </button>
      </div>
      }
    </div>

    
  );
};

export default Header