import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector, useStore } from "react-redux";
import { addUser, removeUser } from '../utils/userSlice'
import React, { useEffect } from 'react'
import { LOGO, SUPPPORTED_LANGUAGES, THEME, USER_AVATAR } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSearchSlice";
import { langChange, themeChange } from "../utils/configSlice";


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store => store.user))
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gptSearch.showGptSearch);

 

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

  const handleGptSearchClick = ()=>{
    // toggle  GPT SEARCH BUTTON
      dispatch(toggleGptSearch());
    };

    const langChangeOnClick = (e) => {
      dispatch(langChange(e.target.value)); 
    };

    const themeChangeOnClick = (e) =>{
      dispatch(themeChange(e.target.value))
    };
    
  
  
  return (
    
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b z-10 flex justify-between'>
      <img className='w-44'
        src={LOGO}
        alt='Netflix logo'
      />
      { user &&
      <div>
        { showGptSearch && <select className="bg-amber-400 m-2 p-2 rounded-lg" 
        onChange={themeChangeOnClick}>
          {THEME.map((currentTheme) => <option key={currentTheme.identifier}
        value={currentTheme.identifier}>{currentTheme.name}</option>)}
        </select>}
        { showGptSearch && <select className="m-4 p-2 bg-green-900 rounded-lg text-white"
         onChange={langChangeOnClick}>
          {SUPPPORTED_LANGUAGES.map((lang)=> <option key={lang.identifier} 
          value={lang.identifier}>{lang.name}</option>)}
        </select>
        }
        <button className="m-4 p-2 bg-purple-900 rounded-lg text-white" 
        onClick={handleGptSearchClick} >{showGptSearch ? "Home" : "GPT Search"}</button>
        <button className='m-4 p-2 bg-red rounded-lg text-white'
        onClick={handleSignOut} >SignOut </button>
      </div>
      }
    </div>

    
  );
};

export default Header