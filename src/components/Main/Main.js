import React, { useContext, useEffect, useState } from 'react'
import "./Main.css"
import { assests } from '../../assests/assests'
import { Context } from '../../context/Context'

const Main = () => {
    const {
        onSent,
        input,
        setInput,
        recentPrompt,
        showResult,
        resultData,
        loading,
    } = useContext(Context);

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
    },[]);

    const [listItem, setListItem] = useState("")

    const listClick = (e) => {
        setListItem(e.target.textContent)
        setInput(e.target.textContent)
        onSent();
    }

  return (
    <>
        <div id='overlay'></div>
        <div className='main'>
            <div className='nav'>
                <p>ChatAI</p>
                <img onClick={() => setSignOutBtn(toggle => !toggle)} className='profile' src={photo} alt='profile'/>
                {signOutBtn?<div className='logout-wrap'>
                    <img onClick={() => setSignOutBtn(toggle => !toggle)} alt='menu' className='closeicon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9dX939qnqze6Uwmku0_fw8__CpyxW501RuA&s'/>
                    <img className='logouticon' alt='logout' src='https://cdn-icons-png.flaticon.com/512/25/25376.png'/>
                    <button onClick={handleSignOut} className=''>Sign out</button>
                </div>
                :null}
            </div>
            <div className='main-container'>
                {!showResult
                ? <>
                    <div className='greet'>
                    <p><span>Hello,{name}</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className='cards'>
                    <ul>
                        <li  onClick={listClick} >
                            <p>Suggest beautiful places to see on an upcoming road trip</p>
                            <img src={assests.compass} alt={assests.compass}/>
                        </li>
                        <li onClick={listClick} >
                            <p>Briefly summarize this concept: urban planning</p>
                            <img src={assests.bulb} alt={assests.bulb}/>
                        </li>
                        <li onClick={listClick}>
                            <p>Brainstorm team bonding activities for our work retreat</p>
                            <img src={assests.chat} alt={assests.chat}/>
                        </li>
                        <li onClick={listClick}>
                            <p>Tell me about React js and React native</p>
                            <img src={assests.code} alt={assests.code}/>
                        </li>
                    </ul>
                </div>
                </>
                : <div className='results'>
                    <div className='result-title'>
                    <p>{recentPrompt || listItem}</p>
                    <img src={photo} alt="user"/>
                </div>
                <div className='result-data'>
                    <img src={assests.gem} alt='loading'/>
                    {loading
                    ?<div className='loader'>
                        <hr/>
                        <hr/>
                        <hr/>
                    </div>
                    :
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                </div>
                </div>
                }
                <div className='main-bottom'>
                    <div className='search-box'>
                        <input onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='Ask ChatAI'/>
                        <div>
                            {/* <img src={assests.gallery} alt={assests.gallery}/> */}
                            {/* <img src={assests.mic} alt={assests.mic}/> */}
                            {input ? <img onClick={() => onSent()} src={assests.send} alt={assests.send}/> : null}
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