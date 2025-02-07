import React from 'react'
import "./Main.css"
import { assests } from '../../assests/assests'

const Main = () => {
  return (
    <div className='main'>
        <div className='nav'>
            <p>Gemini</p>
            <span className='profile'>RN</span>
        </div>
        <div className='main-container'>
            <div className='greet'>
                <p><span>Hello,Rajesh</span></p>
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
                    <input type='text' placeholder='Ask Gemini'/>
                    <div>
                        <img src={assests.gallery} alt={assests.gallery}/>
                        <img src={assests.mic} alt={assests.mic}/>
                        <img src={assests.send} alt={assests.send}/>
                    </div>
                </div>
                <p className='bottom-info'>Gemini can make mistakes, so double-check it</p>
            </div>
        </div>
    </div>
  )
}

export default Main