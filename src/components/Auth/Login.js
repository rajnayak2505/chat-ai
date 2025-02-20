import React, { useEffect, useState } from 'react'
import './Login.css'
import { auth, provider } from './config'
import { signInWithPopup } from 'firebase/auth'
import Main from '../Main/Main'
import Sidebar from '../Sidebar/Sidebar'
import Slideshow from '../Slideshow/Slideshow'

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
        DisableBtn();
    };

    useEffect(() => {
        setValue(localStorage.getItem("email"))
    },[]);


    const DisableBtn = () => {
        const disableBtn = document.getElementById('disableBtn');
        document.getElementById('disableBtn').setAttribute("disabled", "");
        if (disableBtn.classList.contains('disable')) {
            disableBtn.classList.remove('disable');
        } else {
            disableBtn.classList.add('disable');
        }
    };

  return (
    <>
    {value? 
    <>
        <Sidebar/> <Main/>
    </>
    : <div className='login'>
        <div className='img-wrap'>
            <Slideshow/>
        </div>
        <div className='auth-wrap'>
            <h1>ChatAI</h1>
            <h2>Supercharge your creativity and productivity</h2>
            <h3>Chat to start writing, planning, learning and more with Chat AI</h3>
            <button id='disableBtn'
            onClick={handleLoginCLick}
            > <span>SIgn in</span></button>
        </div>
        
    </div>}
    </>
  )
}

export default Login