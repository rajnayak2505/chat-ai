import React, { useState } from 'react'
import './Sidebar.css'
import {assests} from "../../assests/assests"

const Sidebar = () => {

	const [extended, setExtended] = useState(false)
  return (
    <div className='sidebar'>
        <div className='top'>
           <img onClick={() => setExtended(toggle => !toggle)} className='hamburger' src={assests.ham} alt='menu'/>
        <div className='new-chat'>
           <img src={assests.plus} alt='new-chat'/>
		   {extended? <p>New Chat</p>: null}
        </div>
		{extended?
		<div className='recent'>
			<p className='recent-title'>Recent</p>
			<div className='recent-entry'>
			<img  src={assests.lefttext} alt='recent-chat'/>
			<p>What is react...</p>
			</div>
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