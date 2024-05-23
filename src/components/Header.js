import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.

        }).catch((error) => {
            // An error happened.
        });

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse");
                // ...
            } else {
                // User is signed out
                // ...
                dispatch(removeUser());
                navigate("/")
            }
        });
        return () => unsubscribe();
    }, []);

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    }
    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    }
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    return (
        <div className=' px-8 py-2 w-screen bg-gradient-to-b from-black absolute z-10 justify-between flex flex-col md:flex-row '>
            <img className='w-44 mx-auto md:mx-0' src={LOGO}
                alt="logo" />


            {user &&
                <div className='flex p-2 align-middle items-center'>

                    {showGptSearch && <select onClick={handleLanguageChange} className='p-2 m-2 bg-gray-900 text-white'>
                        {SUPPORTED_LANGUAGES.map((lang) => (<option key={lang.identifier} value={lang.identifier} >{lang.name}</option>))}
                    </select>
                    }
                    <button onClick={handleGptSearchClick} className=' px-4  py-2 mx-4 my-2 bg-purple-800 text-white rounded-lg' >
                        {showGptSearch ? "Home Page" : "GPT Search"}
                    </button>

                    <img className='w-12 h-12' alt='userlogo' src={user?.photoURL} />
                    <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
                </div>}
        </div>

    )
}

export default Header
