import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setisSignInForm] = useState(true);
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
            <form className='absolute my-36 p-12 bg-black  w-3/12 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-85'>
                <h1 className='text-3xl font-bold py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && <input type="text" placeholder='Full Name' className='p-4 my-2 w-full text-black bg-gray-700' />}
                <input type="text" placeholder='Email or mobile number' className='p-4 my-2 w-full text-black bg-gray-700' />
                <input type="Password" placeholder='Password' className='p-4 my-2 w-full text-black bg-gray-700' />
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? " New to Netflix? Sign Up now" : "Already registered? Sign In now"} </p>
            </form>
        </div>
    )
}

export default Login
