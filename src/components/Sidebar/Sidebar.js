import React, { useContext, useState } from 'react'
import './Sidebar.css'
import {assests} from "../../assests/assests"
import { Context } from '../../context/Context';

const Sidebar = () => {

	const [extended, setExtended] = useState(false);
	const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Context)

	const loadPrompt = async (prompt) => {
		setRecentPrompt(prompt);
		await onSent(prompt)
	}

  return (
    <div className='sidebar'>
        <div className='top'>
           <img onClick={() => setExtended(toggle => !toggle)} className='hamburger' src={assests.ham} alt='menu'/>
        <div onClick={newChat} className='new-chat'>
           <img src={assests.plus} alt='new-chat'/>
		   {extended? <p>New Chat</p>: null}
        </div>
		{extended?
		<div className='recent'>
			<p className='recent-title'>Recent</p>
			{prevPrompts.map((item,index) =>{
				return(
					<div onClick={()=>loadPrompt(item)} className='recent-entry'>
						<img  src={assests.lefttext} alt='recent-chat'/>
						<p key={index}>{item.slice(0.20)}...</p>
					</div>
				)
			})}
		</div>
		: null
		}
		</div>
        <div className='bottom'>
			<div className='bottom-item recent-entry'>
				<img src={assests.qsn} alt='Help'/>
				{extended? <p>Help</p> : null}
			</div>
			<div className='bottom-item recent-entry'>
				<img  src={assests.hist} alt='History'/>
				{extended? <p>Activity</p> : null}
			</div>
			<div className='bottom-item recent-entry'>
				<img  src={assests.setting} alt='Setting'/>
				{extended? <p>Setting</p> : null}
			</div>
        </div>
    </div>
  )
}

export default Sidebar