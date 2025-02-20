import React, { useEffect, useState } from 'react'
import "./Main.css"
import { assests } from '../../assests/assests'

const Main = () => {
    const [signOutBtn, setSignOutBtn] = useState(false)
    const [name, setName] = useState(localStorage.getItem("name"))
    const [photo, setPhoto] = useState(localStorage.getItem("name"))

    const handleSignOut = () => {
        localStorage.clear()
        window.location.reload()
    }
    useEffect(() => {
        setName(localStorage.getItem("name"));
        setPhoto(localStorage.getItem("photo"));
    });

  return (
    <>
        <div id='overlay'></div>
        <div className='main'>
            <div className='nav'>
                <p>ChatAI</p>
                <img onClick={() => setSignOutBtn(toggle => !toggle)} className='profile' src={photo} alt='profile'/>
                {signOutBtn?<div className='logout-wrap'>
                    <img onClick={() => setSignOutBtn(toggle => !toggle)}  className='closeicon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9dX939qnqze6Uwmku0_fw8__CpyxW501RuA&s'/>
                    <img className='logouticon' src='https://cdn-icons-png.flaticon.com/512/25/25376.png'/>
                    <button onClick={handleSignOut} className=''>Sign out</button>
                </div>
                :null}
            </div>
            <div className='main-container'>
                <div className='greet'>
                    <p><span>Hello,{name}</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className='cards'>
                    <ul>
                        <li>
                            <p>Suggest beautiful places to see on an upcoming road trip</p>
                            <img src={assests.compass} alt={assests.compass}/>
                        </li>
                        <li>
                            <p>Briefly summarize this concept: urban planning</p>
                            <img src={assests.bulb} alt={assests.bulb}/>
                        </li>
                        <li>
                            <p>Brainstorm team bonding activities for our work retreat</p>
                            <img src={assests.chat} alt={assests.chat}/>
                        </li>
                        <li>
                            <p>Tell me about React js and React native</p>
                            <img src={assests.code} alt={assests.code}/>
                        </li>
                    </ul>
                </div>
                <div className='main-bottom'>
                    <div className='search-box'>
                        <input type='text' placeholder='Ask ChatAI'/>
                        <div>
                            <img src={assests.gallery} alt={assests.gallery}/>
                            <img src={assests.mic} alt={assests.mic}/>
                            <img src={assests.send} alt={assests.send}/>
                        </div>
                    </div>
                    <p className='bottom-info'>ChatAI can make mistakes, so double-check it</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Main