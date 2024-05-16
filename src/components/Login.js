import React, { useRef, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/UserSlice';
import { USER_AVATAR } from '../utils/constants';


const Login = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [isSignInForm, setisSignInForm] = useState(true);
    const email = useRef(null);
    const Password = useRef(null);
    const name = useRef(null);
    const dispatch = useDispatch();
    const handleButtonClick = () => {
        // console.log(email.current.value);
        // console.log(Password.current.value);

        const message = checkValidData(email.current.value, Password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isSignInForm) {
            //SignUp logic
            createUserWithEmailAndPassword(auth, email.current.value, Password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_AVATAR,
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                        // Profile updated!
                        // ...
                    }).catch((error) => {
                        setErrorMessage(errorMessage);
                        // An error occurred
                        // ...
                    });

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                    // ..
                });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, Password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;




                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });

        }


    }



    const toggleSignInForm = () => {
        setisSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_large.jpg"
                    alt="logo" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='absolute my-36 p-12 bg-black  w-3/12 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-85'>
                <h1 className='text-3xl font-bold py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && <input ref={name} type="text" placeholder='Full Name' className='p-4 my-2 w-full text-white bg-gray-700' />}
                <input ref={email} type="text" placeholder='Email or mobile number' className='p-4 my-2 w-full text-white bg-gray-700' />
                <input ref={Password} type="Password" placeholder='Password' className='p-4 my-2 w-full text-white bg-gray-700' />

                <p className='text-red-500 font-bold text-lg'>{errorMessage}</p>

                <button onClick={handleButtonClick} className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? " New to Netflix? Sign Up now" : "Already registered? Sign In now"} </p>
            </form>
        </div>
    )
}

export default Login
