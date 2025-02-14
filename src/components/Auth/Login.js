import React, { useEffect, useState } from 'react'
import './Login.css'
import { auth, provider } from './config'
import { signInWithPopup } from 'firebase/auth'
import Body from '../Body/Body'
import Main from '../Main/Main'
import Sidebar from '../Sidebar/Sidebar'

const Login = () => {
    const [value, setValue] = useState('');
    
    const handleLoginCLick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email);
            console.log(data.user)
            localStorage.setItem("email", data.user.email)
            localStorage.setItem("name", data.user.displayName.split(" ")[0])
            localStorage.setItem("photo", data.user.photoURL)
        });
    };

    useEffect(() => {
        setValue(localStorage.getItem("email"))
    });

  return (
    <>
    {value? 
    <>
        <Sidebar/> <Main/>
    </>
    : <div className='login'>
        <div className='img-wrap'>
            <img src='https://www.gstatic.com/lamda/images/landing/a/i18n/en/m4_8k4pzPQk7S3pZbpBoOe5t.jpg' alt='img'/>
        </div>
        <div className='auth-wrap'>
            <h1>ChatAI</h1>
            <h2>Supercharge your creativity and productivity</h2>
            <h3>Chat to start writing, planning, learning and more with Chat AI</h3>
            <button
            onClick={handleLoginCLick}
            >Sign in</button>
        </div>
    </div>}
    </>
  )
}

export default Login